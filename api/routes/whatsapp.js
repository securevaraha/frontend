const express = require('express');
const mysql = require('mysql2/promise');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const GRAPH_VERSION = process.env.WHATSAPP_GRAPH_VERSION || 'v25.0';

const dbConfig = {
  host: 'localhost',
  user: 'varaosrc_prc',
  password: 'PRC!@#456&*(',
  database: 'varaosrc_hospital_management',
  port: 3306,
  connectTimeout: 30000
};

function requireEnv(value, name) {
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

function normalizeIndiaMobile(phone) {
  const digits = phone.replace(/[^0-9]/g, '');
  if (!digits) throw new Error('Phone number is empty');
  if (digits.startsWith('91') && digits.length === 12) return digits;
  if (digits.length === 10) return `91${digits}`;
  if (digits.startsWith('0') && digits.length === 11) return `91${digits.slice(1)}`;
  return `91${digits}`;
}

async function uploadMediaToWhatsApp(fileBuffer, mimeType, fileName) {
  const token = requireEnv(process.env.WHATSAPP_ACCESS_TOKEN, 'WHATSAPP_ACCESS_TOKEN');
  const phoneNumberId = requireEnv(process.env.WHATSAPP_PHONE_NUMBER_ID, 'WHATSAPP_PHONE_NUMBER_ID');

  const { FormData, Blob } = await import('node-fetch').catch(() => {
    // fallback: use global FormData (Node 18+)
    return { FormData: global.FormData, Blob: global.Blob };
  });

  const form = new (global.FormData || FormData)();
  const blob = new (global.Blob || Blob)([fileBuffer], { type: mimeType });
  form.append('file', blob, fileName);

  const res = await fetch(
    `https://graph.facebook.com/${GRAPH_VERSION}/${phoneNumberId}/media`,
    {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: form,
    }
  );

  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(`Media upload failed: ${res.status} ${JSON.stringify(data)}`);
  if (!data?.id) throw new Error(`Media upload succeeded but id missing: ${JSON.stringify(data)}`);
  return data.id;
}



// POST /whatsapp/send-document
// multipart/form-data: phone, caption, file (PDF)
router.post('/send-document', upload.single('file'), async (req, res) => {
  try {
    const { caption } = req.body;
    const file = req.file;

    if (!caption?.trim()) return res.status(400).json({ error: 'caption is required' });
    if (!file) return res.status(400).json({ error: 'file (PDF) is required' });

    const token = requireEnv(process.env.WHATSAPP_ACCESS_TOKEN, 'WHATSAPP_ACCESS_TOKEN');
    const phoneNumberId = requireEnv(process.env.WHATSAPP_PHONE_NUMBER_ID, 'WHATSAPP_PHONE_NUMBER_ID');

    const mediaId = await uploadMediaToWhatsApp(file.buffer, file.mimetype, file.originalname);
    const to = normalizeIndiaMobile(req.body.phone || '');

    const msgRes = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${phoneNumberId}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to,
          type: 'document',
          document: { id: mediaId, caption },
        }),
      }
    );

    const msgData = await msgRes.json().catch(() => ({}));
    if (!msgRes.ok) return res.status(500).json({ error: 'Failed to send document', details: msgData });

    res.json({ success: true, mediaId, messageId: msgData?.messages?.[0]?.id });
  } catch (error) {
    console.error('send-document error:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

// POST /whatsapp/send-text
// JSON: { phone, message }
router.post('/send-text', async (req, res) => {
  try {
    const { phone, message } = req.body;

    if (!phone || !message) {
      return res.status(400).json({ error: 'phone and message are required' });
    }

    const token = requireEnv(process.env.WHATSAPP_ACCESS_TOKEN, 'WHATSAPP_ACCESS_TOKEN');
    const phoneNumberId = requireEnv(process.env.WHATSAPP_PHONE_NUMBER_ID, 'WHATSAPP_PHONE_NUMBER_ID');
    const to = normalizeIndiaMobile(phone);

    const msgRes = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${phoneNumberId}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to,
          type: 'text',
          text: { preview_url: false, body: message },
        }),
      }
    );

    const msgData = await msgRes.json().catch(() => ({}));
    if (!msgRes.ok) return res.status(500).json({ error: 'Failed to send message', details: msgData });

    res.json({ success: true, messageId: msgData?.messages?.[0]?.id });
  } catch (error) {
    console.error('send-text error:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

// POST /whatsapp/send-report
// multipart/form-data: phone, patient_name, file (PDF)
// Uses the varahasdc_scanreport_utility template
router.post('/send-report', upload.single('file'), async (req, res) => {
  try {
    const { phone, patient_name } = req.body;
    const file = req.file;

    if (!phone?.trim()) return res.status(400).json({ error: 'phone is required' });
    if (!patient_name?.trim()) return res.status(400).json({ error: 'patient_name is required' });
    if (!file) return res.status(400).json({ error: 'file (PDF) is required' });

    const token = requireEnv(process.env.WHATSAPP_ACCESS_TOKEN, 'WHATSAPP_ACCESS_TOKEN');
    const phoneNumberId = requireEnv(process.env.WHATSAPP_PHONE_NUMBER_ID, 'WHATSAPP_PHONE_NUMBER_ID');

    const mediaId = await uploadMediaToWhatsApp(file.buffer, file.mimetype, file.originalname);
    const to = normalizeIndiaMobile(phone);

    const msgRes = await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${phoneNumberId}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messaging_product: 'whatsapp',
          to,
          type: 'template',
          template: {
            name: 'varahasdc_scanreport_utility',
            language: { code: 'en' },
            components: [
              {
                type: 'header',
                parameters: [
                  { type: 'document', document: { id: mediaId, filename: file.originalname } }
                ]
              },
              {
                type: 'body',
                parameters: [
                  { type: 'text', text: patient_name }
                ]
              }
            ]
          }
        }),
      }
    );

    const msgData = await msgRes.json().catch(() => ({}));
    if (!msgRes.ok) return res.status(500).json({ error: 'Failed to send report', details: msgData });

    res.json({ success: true, mediaId, messageId: msgData?.messages?.[0]?.id });
  } catch (error) {
    console.error('send-report error:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

// ============================================
// WEBHOOK ENDPOINTS (Meta WhatsApp Cloud API)
// ============================================

// Store recent webhook events in memory (last 50)
const webhookEvents = [];

// GET /whatsapp/webhook-logs - View recent webhook events (from DB)
router.get('/webhook-logs', async (req, res) => {
  let connection;
  try {
    const { page = 1, limit = 50, status, from, to } = req.query;
    const offset = (parseInt(page) - 1) * parseInt(limit);
    connection = await mysql.createConnection(dbConfig);

    let whereClause = 'WHERE 1=1';
    const params = [];

    if (status) {
      whereClause += ' AND status = ?';
      params.push(status);
    }
    if (from) {
      whereClause += ' AND DATE(received_at) >= ?';
      params.push(from);
    }
    if (to) {
      whereClause += ' AND DATE(received_at) <= ?';
      params.push(to);
    }

    const [countResult] = await connection.execute(
      `SELECT COUNT(*) as total FROM whatsapp_logs ${whereClause}`, params
    );
    const total = countResult[0].total;

    const [logs] = await connection.execute(
      `SELECT * FROM whatsapp_logs ${whereClause} ORDER BY received_at DESC LIMIT ? OFFSET ?`,
      [...params, parseInt(limit), offset]
    );

    res.json({
      success: true,
      total,
      page: parseInt(page),
      limit: parseInt(limit),
      totalPages: Math.ceil(total / parseInt(limit)),
      logs
    });
  } catch (error) {
    // If table doesn't exist, return in-memory events
    if (error.code === 'ER_NO_SUCH_TABLE') {
      return res.json({ success: true, total: webhookEvents.length, logs: webhookEvents, source: 'memory' });
    }
    res.status(500).json({ error: error.message });
  } finally {
    if (connection) await connection.end();
  }
});

// GET /whatsapp/webhook-logs/export - Export logs as CSV
router.get('/webhook-logs/export', async (req, res) => {
  let connection;
  try {
    const { from, to, status } = req.query;
    connection = await mysql.createConnection(dbConfig);

    let whereClause = 'WHERE 1=1';
    const params = [];

    if (status) {
      whereClause += ' AND status = ?';
      params.push(status);
    }
    if (from) {
      whereClause += ' AND DATE(received_at) >= ?';
      params.push(from);
    }
    if (to) {
      whereClause += ' AND DATE(received_at) <= ?';
      params.push(to);
    }

    const [logs] = await connection.execute(
      `SELECT * FROM whatsapp_logs ${whereClause} ORDER BY received_at DESC`, params
    );

    // Generate CSV
    const headers = 'ID,Type,Message ID,From,To,Status,Error Code,Error Title,Text,Timestamp,Received At\n';
    const rows = logs.map(log =>
      `${log.id},${log.event_type},${log.message_id || ''},${log.from_number || ''},${log.to_number || ''},${log.status || ''},${log.error_code || ''},"${(log.error_title || '').replace(/"/g, '""')}","${(log.text_body || '').replace(/"/g, '""')}",${log.timestamp || ''},${log.received_at}`
    ).join('\n');

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=whatsapp_logs_${new Date().toISOString().split('T')[0]}.csv`);
    res.send(headers + rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    if (connection) await connection.end();
  }
});

// GET /whatsapp/webhook-logs/stats - Get message stats
router.get('/webhook-logs/stats', async (req, res) => {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    const today = new Date().toISOString().split('T')[0];

    const [stats] = await connection.execute(`
      SELECT 
        COUNT(*) as total,
        SUM(CASE WHEN event_type = 'incoming_message' THEN 1 ELSE 0 END) as incoming,
        SUM(CASE WHEN event_type = 'status' AND status = 'sent' THEN 1 ELSE 0 END) as sent,
        SUM(CASE WHEN event_type = 'status' AND status = 'delivered' THEN 1 ELSE 0 END) as delivered,
        SUM(CASE WHEN event_type = 'status' AND status = 'read' THEN 1 ELSE 0 END) as read_count,
        SUM(CASE WHEN event_type = 'status' AND status = 'failed' THEN 1 ELSE 0 END) as failed,
        SUM(CASE WHEN DATE(received_at) = ? THEN 1 ELSE 0 END) as today_total
      FROM whatsapp_logs
    `, [today]);

    res.json({
      success: true,
      stats: stats[0]
    });
  } catch (error) {
    if (error.code === 'ER_NO_SUCH_TABLE') {
      return res.json({ success: true, stats: { total: 0, incoming: 0, sent: 0, delivered: 0, read_count: 0, failed: 0, today_total: 0 } });
    }
    res.status(500).json({ error: error.message });
  } finally {
    if (connection) await connection.end();
  }
});

// GET /whatsapp/subscribe-app - Subscribe app to WABA for webhook events
router.get('/subscribe-app', async (req, res) => {
  try {
    const token = process.env.WHATSAPP_ACCESS_TOKEN;
    const wabaId = process.env.WHATSAPP_WABA_ID || '840959442374614';

    if (!token) return res.status(500).json({ error: 'WHATSAPP_ACCESS_TOKEN not set' });

    const response = await fetch(`https://graph.facebook.com/v25.0/${wabaId}/subscribed_apps`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await response.json();

    res.json({
      success: response.ok,
      wabaId,
      response: data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /whatsapp/setup-db - Create whatsapp_logs table
router.get('/setup-db', async (req, res) => {
  let connection;
  try {
    connection = await mysql.createConnection(dbConfig);
    await connection.execute(`
      CREATE TABLE IF NOT EXISTS whatsapp_logs (
        id INT AUTO_INCREMENT PRIMARY KEY,
        event_type VARCHAR(50) NOT NULL,
        message_id VARCHAR(255) DEFAULT NULL,
        from_number VARCHAR(20) DEFAULT NULL,
        to_number VARCHAR(20) DEFAULT NULL,
        status VARCHAR(20) DEFAULT NULL,
        message_type VARCHAR(20) DEFAULT NULL,
        text_body TEXT DEFAULT NULL,
        error_code VARCHAR(20) DEFAULT NULL,
        error_title VARCHAR(255) DEFAULT NULL,
        timestamp VARCHAR(20) DEFAULT NULL,
        received_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
        INDEX idx_event_type (event_type),
        INDEX idx_status (status),
        INDEX idx_received_at (received_at),
        INDEX idx_from (from_number),
        INDEX idx_to (to_number)
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    `);
    res.json({ success: true, message: 'whatsapp_logs table created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    if (connection) await connection.end();
  }
});

// GET /whatsapp/webhook - Verification endpoint (Meta sends this to verify your webhook URL)
router.get('/webhook', (req, res) => {
  const VERIFY_TOKEN = process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN || 'varahasdc_webhook_token';

  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('Webhook verified successfully');
    return res.status(200).send(challenge);
  }

  console.error('Webhook verification failed:', { mode, token });
  return res.sendStatus(403);
});

// POST /whatsapp/webhook - Receive delivery status & incoming messages from Meta
router.post('/webhook', async (req, res) => {
  let connection;
  try {
    const body = req.body;
    console.log('[Webhook POST received]', JSON.stringify(body).substring(0, 500));

    // Always respond 200 immediately to Meta
    res.sendStatus(200);

    if (!body?.object || !body?.entry) return;

    connection = await mysql.createConnection(dbConfig);

    for (const entry of body.entry) {
      const changes = entry.changes || [];
      for (const change of changes) {
        const value = change.value;
        if (!value) continue;

        // Handle message status updates (sent, delivered, read, failed)
        if (value.statuses) {
          for (const status of value.statuses) {
            console.log(`[WhatsApp Status] ID: ${status.id} | To: ${status.recipient_id} | Status: ${status.status}`);
            try {
              await connection.execute(
                `INSERT INTO whatsapp_logs (event_type, message_id, to_number, status, error_code, error_title, timestamp, received_at) VALUES (?, ?, ?, ?, ?, ?, ?, NOW())`,
                ['status', status.id || '', status.recipient_id || '', status.status || '', status.errors?.[0]?.code || null, status.errors?.[0]?.title || null, status.timestamp || '']
              );
            } catch (dbErr) {
              console.error('DB insert error (status):', dbErr.message);
            }
          }
        }

        // Handle incoming messages (when patient replies)
        if (value.messages) {
          for (const message of value.messages) {
            console.log(`[WhatsApp Incoming] From: ${message.from} | Type: ${message.type} | Text: ${message.text?.body || '(non-text)'}`);
            try {
              await connection.execute(
                `INSERT INTO whatsapp_logs (event_type, message_id, from_number, message_type, text_body, timestamp, received_at) VALUES (?, ?, ?, ?, ?, ?, NOW())`,
                ['incoming_message', message.id || '', message.from || '', message.type || '', message.text?.body || null, message.timestamp || '']
              );
            } catch (dbErr) {
              console.error('DB insert error (message):', dbErr.message);
            }
          }
        }
      }
    }
  } catch (error) {
    console.error('Webhook processing error:', error);
  } finally {
    if (connection) try { await connection.end(); } catch(e) {}
  }
});

// GET /whatsapp/test
router.get('/test', (req, res) => {
  res.json({
    message: 'WhatsApp endpoint',
    endpoints: [
      'POST /whatsapp/send-text  — { phone, message }',
      'POST /whatsapp/send-document  — multipart: phone, caption, file',
      'POST /whatsapp/send-report  — multipart: phone, patient_name, file (uses varahasdc_scanreport_utility template)',
      'GET  /whatsapp/webhook  — Meta webhook verification',
      'POST /whatsapp/webhook  — Meta webhook callback (delivery status & incoming messages)',
    ],
  });
});

module.exports = router;
