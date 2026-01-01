import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    // Support both old and new field names for backward compatibility
    const {
      fullName = body.name,
      gender,
      age,
      contactNumber = body.phone,
      address,
      scan = body.scanType,
      appointmentDate,
      scheduleTime,
      additionalInformation = body.message,
      // Legacy fields
      name,
      phone,
      email,
      scanType,
      message
    } = body;

    // Basic validation - check for either new or old field names
    const patientName = fullName || name;
    const patientPhone = contactNumber || phone;
    
    if (!patientName || !patientPhone) {
      return NextResponse.json(
        { success: false, error: 'Full name and contact number are required' },
        { status: 400 }
      );
    }

    // Prepare data for API call (include all fields)
    const appointmentData = {
      fullName: patientName,
      gender: gender || null,
      age: age || null,
      contactNumber: patientPhone,
      address: address || null,
      scan: scan || scanType || null,
      appointmentDate: appointmentDate || null,
      scheduleTime: scheduleTime || null,
      additionalInformation: additionalInformation || message || null,
      // Include legacy fields for backward compatibility
      name: patientName,
      phone: patientPhone,
      email: email || null,
      scanType: scan || scanType || null,
      message: additionalInformation || message || null
    };

    // Call your existing API
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://varahasdc.co.in/api';
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointmentData)
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json(
        { success: true, message: 'Appointment booked successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, error: data.error || 'Failed to book appointment' },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}