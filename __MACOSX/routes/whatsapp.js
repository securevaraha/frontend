const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const GRAPH_VERSION = process.env.WHATSAPP_GRAPH_VERSION || 'v25.0';

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

// GET /whatsapp/webhook-logs - View recent webhook events
router.get('/webhook-logs', (req, res) => {
  res.json({
    success: true,
    total: webhookEvents.length,
    events: webhookEvents
  });
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
  try {
    const body = req.body;
    console.log('[Webhook POST received]', JSON.stringify(body).substring(0, 500));

    // Store raw event for debugging
    webhookEvents.unshift({
      type: 'raw',
      body: body,
      receivedAt: new Date().toISOString()
    });
    if (webhookEvents.length > 50) webhookEvents.pop();

    // Always respond 200 immediately to Meta
    res.sendStatus(200);

    if (!body?.object || !body?.entry) return;

    for (const entry of body.entry) {
      const changes = entry.changes || [];
      for (const change of changes) {
        const value = change.value;
        if (!value) continue;

        // Handle message status updates (sent, delivered, read, failed)
        if (value.statuses) {
          for (const status of value.statuses) {
            const event = {
              type: 'status',
              messageId: status.id,
              recipient: status.recipient_id,
              status: status.status,
              timestamp: status.timestamp,
              error: status.errors?.[0] || null,
              receivedAt: new Date().toISOString()
            };
            webhookEvents.unshift(event);
            if (webhookEvents.length > 50) webhookEvents.pop();
            console.log(`[WhatsApp Status] ID: ${status.id} | To: ${status.recipient_id} | Status: ${status.status}`);

            if (status.status === 'failed') {
              console.error(`[WhatsApp FAILED] To: ${status.recipient_id} | Error: ${status.errors?.[0]?.code} - ${status.errors?.[0]?.title}`);
            }
          }
        }

        // Handle incoming messages (when patient replies)
        if (value.messages) {
          for (const message of value.messages) {
            const event = {
              type: 'incoming_message',
              from: message.from,
              messageType: message.type,
              text: message.text?.body || null,
              timestamp: message.timestamp,
              receivedAt: new Date().toISOString()
            };
            webhookEvents.unshift(event);
            if (webhookEvents.length > 50) webhookEvents.pop();
            console.log(`[WhatsApp Incoming] From: ${message.from} | Type: ${message.type} | Text: ${message.text?.body || '(non-text)'}`);
          }
        }
      }
    }
  } catch (error) {
    console.error('Webhook processing error:', error);
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
