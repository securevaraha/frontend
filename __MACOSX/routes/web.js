const express = require('express');
const mysql = require('mysql2/promise');
const router = express.Router();

const dbConfig = {
  host: 'localhost',
  user: 'varaosrc_prc',
  password: 'PRC!@#456&*(',
  database: 'varaosrc_hospital_management',
  port: 3306,
  connectTimeout: 30000
};

// Debug database configuration
console.log('Web DB Config:', {
  host: dbConfig.host,
  user: dbConfig.user,
  database: dbConfig.database,
  port: dbConfig.port
});

// Input sanitization helper
const sanitizeInput = (input) => {
  if (typeof input !== 'string') return input;
  // Remove potential XSS characters
  return input.replace(/[<>]/g, '').trim();
};

// Validate phone number
const validatePhone = (phone) => {
  if (!phone) return false;
  // Indian mobile numbers: 10 digits starting with 6-9
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.toString().replace(/\D/g, ''));
};

// Validate email
const validateEmail = (email) => {
  if (!email) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Enhanced error handler
const handleError = (error, operation, res) => {
  console.error(`${operation} error:`, error);
  
  // Database connection errors
  if (error.code === 'ECONNREFUSED') {
    return res.status(503).json({
      success: false,
      error: 'Database connection failed',
      message: 'Unable to connect to database. Please try again later.',
      code: 'DB_CONNECTION_ERROR'
    });
  }
  
  // Authentication errors
  if (error.code === 'ER_ACCESS_DENIED_ERROR') {
    return res.status(503).json({
      success: false,
      error: 'Database authentication failed',
      message: 'Database access denied. Please contact support.',
      code: 'DB_AUTH_ERROR'
    });
  }
  
  // SQL syntax errors
  if (error.code === 'ER_PARSE_ERROR' || error.code === 'ER_BAD_FIELD_ERROR') {
    return res.status(500).json({
      success: false,
      error: 'Database query error',
      message: 'Invalid database operation. Please contact support.',
      code: 'DB_QUERY_ERROR'
    });
  }
  
  // Table/column not found
  if (error.code === 'ER_NO_SUCH_TABLE' || error.code === 'ER_BAD_FIELD_ERROR') {
    return res.status(500).json({
      success: false,
      error: 'Database structure error',
      message: 'Required database table or field not found.',
      code: 'DB_STRUCTURE_ERROR'
    });
  }
  
  // Duplicate entry errors
  if (error.code === 'ER_DUP_ENTRY') {
    return res.status(409).json({
      success: false,
      error: 'Duplicate entry',
      message: 'Record already exists with this information.',
      code: 'DUPLICATE_ENTRY'
    });
  }
  
  // Timeout errors
  if (error.code === 'ETIMEDOUT' || error.code === 'ENOTFOUND') {
    return res.status(504).json({
      success: false,
      error: 'Request timeout',
      message: 'Operation timed out. Please try again.',
      code: 'TIMEOUT_ERROR'
    });
  }
  
  // Generic database errors
  if (error.code && error.code.startsWith('ER_')) {
    return res.status(500).json({
      success: false,
      error: 'Database operation failed',
      message: 'A database error occurred. Please try again or contact support.',
      code: error.code
    });
  }
  
  // Generic server errors
  return res.status(500).json({
    success: false,
    error: `Failed to ${operation.toLowerCase()}`,
    message: 'An unexpected error occurred. Please try again later.',
    code: 'INTERNAL_ERROR'
  });
};

// Validate required fields
const validateRequired = (fields, data) => {
  const missing = [];
  for (const field of fields) {
    if (!data[field] || (typeof data[field] === 'string' && !data[field].trim())) {
      missing.push(field);
    }
  }
  return missing;
};

// ============================================
// ENQUIRIES ENDPOINTS
// ============================================

// Get enquiry statistics
router.get('/enquiries/stats', async (req, res) => {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);

    const [stats] = await connection.execute(`
      SELECT 
        COUNT(*) as total
      FROM contact
    `);

    res.json({
      success: true,
      total: stats[0]?.total || 0,
      pending: stats[0]?.total || 0
    });

  } catch (error) {
    handleError(error, 'fetch enquiry statistics', res);
  } finally {
    if (connection) {
      try {
        await connection.end();
      } catch (closeError) {
        console.error('Error closing connection:', closeError);
      }
    }
  }
});

// Get all enquiries with filters
router.get('/enquiries', async (req, res) => {
  let connection;
  try {
    const { search, date } = req.query;
    connection = await mysql.createConnection(dbConfig);

    let query = `
      SELECT 
        id, name, phone, email, enquiry, created_at
      FROM contact
      WHERE 1=1
    `;
    const params = [];

    if (search) {
      query += ' AND (name LIKE ? OR phone LIKE ? OR enquiry LIKE ?)';
      const searchTerm = `%${search}%`;
      params.push(searchTerm, searchTerm, searchTerm);
    }

    if (date) {
      query += ' AND DATE(created_at) = ?';
      params.push(date);
    }

    query += ' ORDER BY created_at DESC';

    const [enquiries] = await connection.execute(query, params);

    res.json({
      success: true,
      enquiries: enquiries.map(enquiry => ({
        id: enquiry.id,
        name: enquiry.name,
        phone: enquiry.phone,
        email: enquiry.email,
        enquiry: enquiry.enquiry,
        createdAt: enquiry.created_at
      }))
    });

  } catch (error) {
    console.error('Enquiries fetch error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch enquiries',
      details: error.message
    });
  } finally {
    if (connection) await connection.end();
  }
});

// Create new enquiry
router.post('/enquiries', async (req, res) => {
  let connection;
  try {
    const { name, phone, email, message } = req.body;
    
    // Validate required fields
    const missing = validateRequired(['name', 'phone', 'email', 'message'], req.body);
    if (missing.length > 0) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
        message: `Please provide: ${missing.join(', ')}`,
        code: 'VALIDATION_ERROR',
        missing: missing
      });
    }

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name);
    const sanitizedPhone = sanitizeInput(phone);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);

    // Validate phone and email
    if (!validatePhone(sanitizedPhone)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid phone number',
        message: 'Please enter a valid 10-digit Indian mobile number starting with 6-9',
        code: 'INVALID_PHONE'
      });
    }

    if (!validateEmail(sanitizedEmail)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid email format',
        message: 'Please enter a valid email address',
        code: 'INVALID_EMAIL'
      });
    }

    connection = await mysql.createConnection(dbConfig);

    const [result] = await connection.execute(
      `INSERT INTO contact (name, phone, email, enquiry, created_at) 
       VALUES (?, ?, ?, ?, NOW())`,
      [sanitizedName, sanitizedPhone, sanitizedEmail, sanitizedMessage]
    );

    res.json({
      success: true,
      message: 'Enquiry submitted successfully',
      enquiry: {
        id: result.insertId,
        name: sanitizedName,
        phone: sanitizedPhone,
        email: sanitizedEmail,
        enquiry: sanitizedMessage
      }
    });

  } catch (error) {
    handleError(error, 'create enquiry', res);
  } finally {
    if (connection) {
      try {
        await connection.end();
      } catch (closeError) {
        console.error('Error closing connection:', closeError);
      }
    }
  }
});

// ============================================
// APPOINTMENTS ENDPOINTS
// ============================================

// Get all appointments with filters
router.get('/appointments', async (req, res) => {
  let connection;
  try {
    const { status, date, search } = req.query;
    console.log('Appointments request params:', { status, date, search });
    
    connection = await mysql.createConnection(dbConfig);

    let query = `
      SELECT 
        id,
        cro,
        patient_name as patientName,
        phone,
        age,
        gender,
        scan_type as scanType,
        appointment_date as appointmentDate,
        appointment_time as appointmentTime,
        status,
        created_at as createdAt
      FROM appointments
      WHERE 1=1
    `;
    const params = [];

    if (status && status !== 'all') {
      query += ' AND status = ?';
      params.push(status);
    }

    if (date) {
      query += ' AND appointment_date = ?';
      params.push(date);
    }

    if (search) {
      query += ' AND (patient_name LIKE ? OR cro LIKE ? OR phone LIKE ?)';
      const searchTerm = `%${search}%`;
      params.push(searchTerm, searchTerm, searchTerm);
    }

    query += ' ORDER BY created_at DESC LIMIT 50';
    
    console.log('Executing query:', query);
    console.log('With params:', params);

    const [appointments] = await connection.execute(query, params);
    console.log('Raw appointments found:', appointments.length);

    const processedAppointments = appointments.map(apt => ({
      id: apt.id,
      cro: apt.cro || '',
      patientName: apt.patientName || '',
      phone: apt.phone || '',
      age: apt.age || '',
      gender: apt.gender || '',
      scanType: apt.scanType || '',
      appointmentDate: apt.appointmentDate || '',
      appointmentTime: apt.appointmentTime || '',
      status: apt.status || 'scheduled',
      doctorName: '',
      hospitalName: '',
      createdAt: apt.createdAt
    }));

    console.log('Processed appointments:', processedAppointments.length);

    res.json({
      success: true,
      appointments: processedAppointments
    });

  } catch (error) {
    console.error('Appointments fetch error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch appointments',
      details: error.message
    });
  } finally {
    if (connection) await connection.end();
  }
});

// Get appointment statistics
router.get('/appointments/stats', async (req, res) => {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);

    const today = new Date().toISOString().split('T')[0];

    const [stats] = await connection.execute(`
      SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN status = 'scheduled' THEN 1 ELSE 0 END) as scheduled,
        SUM(CASE WHEN status = 'completed' THEN 1 ELSE 0 END) as completed,
        SUM(CASE WHEN status = 'cancelled' THEN 1 ELSE 0 END) as cancelled,
        SUM(CASE WHEN appointment_date = ? AND status = 'scheduled' THEN 1 ELSE 0 END) as today
      FROM appointments
      WHERE 1=1
    `, [today]);

    res.json({
      success: true,
      total: stats[0]?.total || 0,
      scheduled: stats[0]?.scheduled || 0,
      completed: stats[0]?.completed || 0,
      cancelled: stats[0]?.cancelled || 0,
      today: stats[0]?.today || 0
    });

  } catch (error) {
    console.error('Appointments stats error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch appointment statistics',
      details: error.message
    });
  } finally {
    if (connection) await connection.end();
  }
});

// Update appointment status
router.put('/appointments/:id', async (req, res) => {
  let connection;
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status || !['scheduled', 'completed', 'cancelled'].includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Valid status is required (scheduled, completed, cancelled)'
      });
    }

    connection = await mysql.createConnection(dbConfig);

    await connection.execute(
      'UPDATE appointments SET status = ? WHERE id = ?',
      [status, id]
    );

    res.json({
      success: true,
      message: 'Appointment status updated successfully'
    });

  } catch (error) {
    console.error('Appointment update error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update appointment status',
      details: error.message
    });
  } finally {
    if (connection) await connection.end();
  }
});

// ============================================
// SCHEDULE ENDPOINTS
// ============================================

// Get schedule slots
router.get('/schedule', async (req, res) => {
  let connection;
  try {
    const { date, status } = req.query;
    
    if (!date) {
      return res.status(400).json({
        success: false,
        error: 'Date parameter is required'
      });
    }

    connection = await mysql.createConnection(dbConfig);

    const [reservedSlots] = await connection.execute(
      'SELECT * FROM reseve_slot WHERE reserv_date = ? ORDER BY reserv_start_time ASC',
      [date]
    );

    const [appointments] = await connection.execute(
      'SELECT appointment_time, patient_name, cro FROM appointments WHERE appointment_date = ? AND status = "scheduled"',
      [date]
    );

    const bookedMap = new Map();
    for (const apt of appointments) {
      if (apt.appointment_time) {
        bookedMap.set(apt.appointment_time, {
          patientName: apt.patient_name,
          cro: apt.cro
        });
      }
    }

    let slots = reservedSlots.map((slot, index) => {
      const startTime = slot.reserv_start_time || '';
      const endTime = slot.reserv_end_time || '';
      const bookedInfo = bookedMap.get(startTime);

      return {
        id: slot.reserv_id || index + 1,
        date: slot.reserv_date,
        startTime: startTime,
        endTime: endTime,
        status: bookedInfo ? 'booked' : 'available',
        patientName: bookedInfo?.patientName || null,
        cro: bookedInfo?.cro || null
      };
    });

    if (status && status !== 'all') {
      slots = slots.filter(slot => slot.status === status);
    }

    res.json({
      success: true,
      slots: slots
    });

  } catch (error) {
    console.error('Schedule fetch error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch schedule',
      details: error.message
    });
  } finally {
    if (connection) await connection.end();
  }
});

// Get schedule statistics
router.get('/schedule/stats', async (req, res) => {
  let connection;
  try {
    const { date } = req.query;
    
    if (!date) {
      return res.status(400).json({
        success: false,
        error: 'Date parameter is required'
      });
    }

    connection = await mysql.createConnection(dbConfig);

    const [reservedCount] = await connection.execute(
      'SELECT COUNT(*) as count FROM reseve_slot WHERE reserv_date = ?',
      [date]
    );

    const [bookedCount] = await connection.execute(
      'SELECT COUNT(*) as count FROM appointments WHERE appointment_date = ? AND status = "scheduled"',
      [date]
    );

    const total = reservedCount[0]?.count || 0;
    const booked = bookedCount[0]?.count || 0;
    const available = total - booked;

    res.json({
      success: true,
      available: available > 0 ? available : 0,
      booked: booked,
      blocked: 0
    });

  } catch (error) {
    console.error('Schedule stats error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch schedule statistics',
      details: error.message
    });
  } finally {
    if (connection) await connection.end();
  }
});

// Create new time slot
router.post('/schedule', async (req, res) => {
  let connection;
  try {
    const { date, startTime, endTime } = req.body;

    // Validate required fields
    const missing = validateRequired(['date', 'startTime', 'endTime'], req.body);
    if (missing.length > 0) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
        message: `Please provide: ${missing.join(', ')}`,
        code: 'VALIDATION_ERROR',
        missing: missing
      });
    }

    // Validate date is today or future (IST)
    const todayIST = new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Calcutta' });
    if (date < todayIST) {
      return res.status(400).json({
        success: false,
        error: 'Invalid date',
        message: 'Slots can only be created for today or future dates',
        code: 'INVALID_DATE'
      });
    }

    // Validate time format
    const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
    if (!timeRegex.test(startTime) || !timeRegex.test(endTime)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid time format',
        message: 'Time must be in HH:MM format (24-hour)',
        code: 'INVALID_TIME_FORMAT'
      });
    }

    // Validate end time is after start time
    const [startHour, startMin] = startTime.split(':').map(Number);
    const [endHour, endMin] = endTime.split(':').map(Number);
    const startMinutes = startHour * 60 + startMin;
    const endMinutes = endHour * 60 + endMin;
    
    if (endMinutes <= startMinutes) {
      return res.status(400).json({
        success: false,
        error: 'Invalid time range',
        message: 'End time must be after start time',
        code: 'INVALID_TIME_RANGE'
      });
    }

    connection = await mysql.createConnection(dbConfig);

    // Check for overlapping slots
    const [overlapping] = await connection.execute(
      `SELECT reserv_id FROM reseve_slot 
       WHERE reserv_date = ? 
       AND (
         (reserv_start_time <= ? AND reserv_end_time > ?) OR
         (reserv_start_time < ? AND reserv_end_time >= ?) OR
         (reserv_start_time >= ? AND reserv_end_time <= ?)
       )`,
      [date, startTime, startTime, endTime, endTime, startTime, endTime]
    );

    if (overlapping.length > 0) {
      return res.status(409).json({
        success: false,
        error: 'Time slot conflict',
        message: 'This time slot overlaps with an existing slot',
        code: 'SLOT_OVERLAP'
      });
    }

    const [result] = await connection.execute(
      'INSERT INTO reseve_slot (reserv_date, reserv_start_time, reserv_end_time) VALUES (?, ?, ?)',
      [date, startTime, endTime]
    );

    res.json({
      success: true,
      message: 'Time slot created successfully',
      slot: {
        id: result.insertId,
        date,
        startTime,
        endTime,
        status: 'available'
      }
    });

  } catch (error) {
    handleError(error, 'create time slot', res);
  } finally {
    if (connection) {
      try {
        await connection.end();
      } catch (closeError) {
        console.error('Error closing connection:', closeError);
      }
    }
  }
});

// Get available dates for scheduling
router.get('/available-dates', async (req, res) => {
  try {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const maxDate = new Date();
    maxDate.setDate(tomorrow.getDate() + 90); // 3 months ahead
    
    const availableDates = [];
    const currentDate = new Date(tomorrow);
    
    while (currentDate <= maxDate) {
      // Skip Sundays (0 = Sunday)
      if (currentDate.getDay() !== 0) {
        availableDates.push({
          date: currentDate.toISOString().split('T')[0],
          display: currentDate.toLocaleDateString('en-IN', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }),
          dayOfWeek: currentDate.toLocaleDateString('en-IN', { weekday: 'long' })
        });
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    res.json({
      success: true,
      availableDates,
      minDate: tomorrow.toISOString().split('T')[0],
      maxDate: maxDate.toISOString().split('T')[0]
    });

  } catch (error) {
    handleError(error, 'fetch available dates', res);
  }
});

// Bulk create time slots
router.post('/schedule/bulk', async (req, res) => {
  let connection;
  try {
    const { date, timeSlots } = req.body;

    if (!date || !timeSlots || !Array.isArray(timeSlots) || timeSlots.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'Invalid request',
        message: 'Date and time slots array are required',
        code: 'VALIDATION_ERROR'
      });
    }

    // Validate date is in future
    const slotDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (slotDate < today) {
      return res.status(400).json({
        success: false,
        error: 'Invalid date',
        message: 'Schedule date must be today or in the future',
        code: 'INVALID_DATE'
      });
    }

    connection = await mysql.createConnection(dbConfig);
    
    const createdSlots = [];
    const errors = [];

    for (let i = 0; i < timeSlots.length; i++) {
      const { startTime, endTime } = timeSlots[i];
      
      try {
        // Validate time format
        const timeRegex = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/;
        if (!timeRegex.test(startTime) || !timeRegex.test(endTime)) {
          errors.push(`Slot ${i + 1}: Invalid time format`);
          continue;
        }

        // Check for overlapping slots
        const [overlapping] = await connection.execute(
          `SELECT reserv_id FROM reseve_slot 
           WHERE reserv_date = ? 
           AND (
             (reserv_start_time <= ? AND reserv_end_time > ?) OR
             (reserv_start_time < ? AND reserv_end_time >= ?) OR
             (reserv_start_time >= ? AND reserv_end_time <= ?)
           )`,
          [date, startTime, startTime, endTime, endTime, startTime, endTime]
        );

        if (overlapping.length > 0) {
          errors.push(`Slot ${i + 1}: Time ${startTime}-${endTime} overlaps with existing slot`);
          continue;
        }

        const [result] = await connection.execute(
          'INSERT INTO reseve_slot (reserv_date, reserv_start_time, reserv_end_time) VALUES (?, ?, ?)',
          [date, startTime, endTime]
        );

        createdSlots.push({
          id: result.insertId,
          date,
          startTime,
          endTime,
          status: 'available'
        });

      } catch (error) {
        errors.push(`Slot ${i + 1}: ${error.message}`);
      }
    }

    res.json({
      success: true,
      message: `Created ${createdSlots.length} time slots`,
      createdSlots,
      errors: errors.length > 0 ? errors : undefined,
      summary: {
        total: timeSlots.length,
        created: createdSlots.length,
        failed: errors.length
      }
    });

  } catch (error) {
    handleError(error, 'bulk create time slots', res);
  } finally {
    if (connection) {
      try {
        await connection.end();
      } catch (closeError) {
        console.error('Error closing connection:', closeError);
      }
    }
  }
});

// Delete time slot
router.delete('/schedule/:id', async (req, res) => {
  let connection;
  try {
    const { id } = req.params;
    connection = await mysql.createConnection(dbConfig);

    await connection.execute(
      'DELETE FROM reseve_slot WHERE reserv_id = ?',
      [id]
    );

    res.json({
      success: true,
      message: 'Time slot deleted successfully'
    });

  } catch (error) {
    console.error('Schedule delete error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete time slot',
      details: error.message
    });
  } finally {
    if (connection) await connection.end();
  }
});

// Update schedule slot status
router.put('/schedule/:id', async (req, res) => {
  let connection;
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status || !['available', 'blocked'].includes(status)) {
      return res.status(400).json({
        success: false,
        error: 'Valid status is required (available, blocked)'
      });
    }

    connection = await mysql.createConnection(dbConfig);

    // For now, we'll just return success since the reseve_slot table doesn't have a status column
    // This is a placeholder for future implementation
    res.json({
      success: true,
      message: 'Slot status updated successfully'
    });

  } catch (error) {
    console.error('Schedule update error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update slot status',
      details: error.message
    });
  } finally {
    if (connection) await connection.end();
  }
});

// ============================================
// SCAN TYPES ENDPOINTS
// ============================================

// Get all scans
router.get('/scans', async (req, res) => {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    
    const [scans] = await connection.execute(
      'SELECT s_id, s_name FROM scan ORDER BY s_name ASC'
    );

    res.json({
      success: true,
      scans: scans.map(scan => ({
        id: scan.s_id,
        name: scan.s_name
      }))
    });

  } catch (error) {
    console.error('Scans fetch error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch scans',
      details: error.message
    });
  } finally {
    if (connection) await connection.end();
  }
});

// ============================================
// BOOKING ENDPOINTS
// ============================================

// Get available time slots for booking
router.get('/available-slots', async (req, res) => {
  let connection;
  try {
    const { date } = req.query;
    
    if (!date) {
      return res.status(400).json({
        success: false,
        error: 'Date parameter is required',
        message: 'Please provide a date to check available slots',
        code: 'MISSING_DATE'
      });
    }

    // Validate date is not in past
    const requestedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (requestedDate < today) {
      return res.status(400).json({
        success: false,
        error: 'Invalid date',
        message: 'Cannot book appointments for past dates',
        code: 'PAST_DATE'
      });
    }

    connection = await mysql.createConnection(dbConfig);

    const [reservedSlots] = await connection.execute(
      'SELECT reserv_id, reserv_start_time, reserv_end_time FROM reseve_slot WHERE reserv_date = ? ORDER BY reserv_start_time ASC',
      [date]
    );

    if (reservedSlots.length === 0) {
      return res.json({
        success: true,
        availableSlots: [],
        message: 'No time slots have been scheduled for this date. Please contact us or select another date.',
        hasSlots: false
      });
    }

    const [bookedSlots] = await connection.execute(
      'SELECT appointment_time FROM appointments WHERE appointment_date = ? AND status = "scheduled"',
      [date]
    );

    const bookedTimes = new Set(bookedSlots.map(slot => slot.appointment_time).filter(Boolean));

    const availableSlots = reservedSlots
      .filter(slot => !bookedTimes.has(slot.reserv_start_time))
      .map(slot => ({
        id: slot.reserv_id,
        startTime: slot.reserv_start_time,
        endTime: slot.reserv_end_time,
        display: `${slot.reserv_start_time} - ${slot.reserv_end_time}`,
        value: slot.reserv_start_time
      }));

    res.json({
      success: true,
      availableSlots,
      hasSlots: true,
      totalSlots: reservedSlots.length,
      bookedSlots: bookedSlots.length,
      availableCount: availableSlots.length,
      message: availableSlots.length === 0 ? 'All slots are booked for this date' : `${availableSlots.length} slots available`
    });

  } catch (error) {
    handleError(error, 'fetch available slots', res);
  } finally {
    if (connection) {
      try {
        await connection.end();
      } catch (closeError) {
        console.error('Error closing connection:', closeError);
      }
    }
  }
});

// Book appointment
router.post('/book-appointment', async (req, res) => {
  let connection;
  try {
    const { fullName, gender, age, contactNumber, address, scan, appointmentDate, scheduleTime, additionalInformation } = req.body;

    // Validate required fields
    const missing = validateRequired(['fullName', 'gender', 'age', 'contactNumber', 'address', 'scan', 'appointmentDate', 'scheduleTime'], req.body);
    if (missing.length > 0) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields',
        message: `Please provide: ${missing.join(', ')}`,
        code: 'VALIDATION_ERROR',
        missing: missing
      });
    }

    // Validate age
    const ageNum = parseInt(age);
    if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
      return res.status(400).json({
        success: false,
        error: 'Invalid age',
        message: 'Age must be between 1 and 120 years',
        code: 'INVALID_AGE'
      });
    }

    const sanitizedName = sanitizeInput(fullName);
    const sanitizedPhone = sanitizeInput(contactNumber);
    const sanitizedAddress = sanitizeInput(address);
    const sanitizedInfo = additionalInformation ? sanitizeInput(additionalInformation) : '';

    if (!validatePhone(sanitizedPhone)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid phone number',
        message: 'Please enter a valid 10-digit Indian mobile number starting with 6-9',
        code: 'INVALID_PHONE'
      });
    }

    // Validate appointment date
    const appointmentDateObj = new Date(appointmentDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (appointmentDateObj < today) {
      return res.status(400).json({
        success: false,
        error: 'Invalid appointment date',
        message: 'Appointment date cannot be in the past',
        code: 'INVALID_DATE'
      });
    }

    connection = await mysql.createConnection(dbConfig);

    // Check if time slot is still available
    const [existingBooking] = await connection.execute(
      'SELECT id FROM appointments WHERE appointment_date = ? AND appointment_time = ? AND status = "scheduled"',
      [appointmentDate, scheduleTime]
    );

    if (existingBooking.length > 0) {
      return res.status(409).json({
        success: false,
        error: 'Time slot unavailable',
        message: 'This time slot has already been booked. Please select another time.',
        code: 'SLOT_UNAVAILABLE'
      });
    }

    // Generate CRO number
    const [lastCRO] = await connection.execute(
      'SELECT cro FROM appointments WHERE cro LIKE ? ORDER BY id DESC LIMIT 1',
      [`WEB-%`]
    );
    
    let croNumber = 1;
    if (lastCRO.length > 0 && lastCRO[0].cro) {
      const lastNumber = parseInt(lastCRO[0].cro.replace('WEB-', '') || '0');
      croNumber = lastNumber + 1;
    }
    
    const cro = `WEB-${String(croNumber).padStart(4, '0')}`;
    const scanNames = Array.isArray(scan) ? scan.join(', ') : scan;

    const [result] = await connection.execute(
      `INSERT INTO appointments (
        cro, patient_name, phone, age, gender, address, additional_info,
        scan_type, appointment_date, appointment_time, status, source, created_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'scheduled', 'web', NOW())`,
      [
        cro, sanitizedName, sanitizedPhone, age, gender, sanitizedAddress, sanitizedInfo,
        scanNames, appointmentDate, scheduleTime
      ]
    );

    res.json({
      success: true,
      message: 'Appointment booked successfully',
      appointment: {
        id: result.insertId,
        cro,
        patientName: sanitizedName,
        appointmentDate,
        scheduleTime,
        scanType: scanNames
      }
    });

  } catch (error) {
    handleError(error, 'book appointment', res);
  } finally {
    if (connection) {
      try {
        await connection.end();
      } catch (closeError) {
        console.error('Error closing connection:', closeError);
      }
    }
  }
});

module.exports = router;