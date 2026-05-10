import type { } from 'next/server';

const GRAPH_VERSION = process.env.WHATSAPP_GRAPH_VERSION || 'v25.0';
const WHATSAPP_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;

function requireEnv(value: string | undefined, name: string): string {
  if (!value) throw new Error(`Missing env var: ${name}`);
  return value;
}

function normalizeIndiaMobile(phone: string): string {
  // Expected output for Cloud API `to`: digits only (no +)
  // e.g. "7014265848" -> "917014265848"
  const digits = phone.replace(/[^0-9]/g, '');
  if (!digits) throw new Error('Phone number is empty');
  if (digits.startsWith('91') && digits.length === 12) return digits;
  if (digits.length === 10) return `91${digits}`;
  // fallback
  return digits;
}

export async function uploadWhatsAppDocumentToMediaId(file: File): Promise<string> {
  // NOTE:
  // Meta Cloud API media upload endpoints vary by message type and documented flow.
  // This implementation uses the commonly-supported approach:
  // - Upload to Meta "media" endpoint
  // - Receive a media id
  //
  // You MUST set correct envs and verify the endpoint works with your app.

  const token = requireEnv(WHATSAPP_TOKEN, 'WHATSAPP_ACCESS_TOKEN');
  // Facebook requires multipart with file. Use file arrayBuffer -> Buffer.
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const mimeType = file.type || 'application/pdf';
  const fileName = (file as any).name || 'document.pdf';

  const form = new FormData();
  // Meta expects parameter name "file" for media uploads in most examples.
  // Some examples also accept "filename".
  const blob = new Blob([buffer], { type: mimeType });
  form.append('file', blob, fileName);

  // Common endpoint pattern:
  // POST /{version}/{phone-number-id}/media
  // Returns { id: "..." }
  // If your Meta requires a different path, adjust here.
  const url = `https://graph.facebook.com/${GRAPH_VERSION}/${WHATSAPP_PHONE_NUMBER_ID}/media`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: form,
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(`Media upload failed: ${res.status} ${JSON.stringify(data)}`);
  }

  // Expected: { id: "...", ... }
  if (!data?.id) throw new Error(`Media upload succeeded but id missing: ${JSON.stringify(data)}`);
  return data.id as string;
}

export async function sendDocumentToWhatsApp(phone: string, caption: string, mediaId: string): Promise<{ success: boolean; messageId?: string; error?: string }>{
  const token = requireEnv(WHATSAPP_TOKEN, 'WHATSAPP_ACCESS_TOKEN');
  const phoneNumberId = requireEnv(WHATSAPP_PHONE_NUMBER_ID, 'WHATSAPP_PHONE_NUMBER_ID');

  const to = normalizeIndiaMobile(phone);

  const payload = {
    messaging_product: 'whatsapp',
    to,
    type: 'document',
    document: {
      id: mediaId,
      caption,
    },
  };

  const res = await fetch(`https://graph.facebook.com/${GRAPH_VERSION}/${phoneNumberId}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    return { success: false, error: JSON.stringify(data) };
  }

  // WhatsApp response usually includes messages array with id
  const messageId = data?.messages?.[0]?.id;
  return { success: true, messageId };
}

export async function sendText(phone: string, message: string): Promise<{ success: boolean; messageId?: string; error?: string }>{
  const token = requireEnv(WHATSAPP_TOKEN, 'WHATSAPP_ACCESS_TOKEN');
  const phoneNumberId = requireEnv(WHATSAPP_PHONE_NUMBER_ID, 'WHATSAPP_PHONE_NUMBER_ID');

  const to = normalizeIndiaMobile(phone);

  const payload = {
    messaging_product: 'whatsapp',
    to,
    type: 'text',
    text: {
      preview_url: false,
      body: message,
    },
  };

  const res = await fetch(`https://graph.facebook.com/${GRAPH_VERSION}/${phoneNumberId}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    return { success: false, error: JSON.stringify(data) };
  }

  const messageId = data?.messages?.[0]?.id;
  return { success: true, messageId };
}

