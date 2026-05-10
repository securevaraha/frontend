import { NextRequest, NextResponse } from 'next/server';
import { sendDocumentToWhatsApp, uploadWhatsAppDocumentToMediaId } from '@/lib/whatsapp';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const phone = formData.get('phone');
    const caption = formData.get('caption');
    const file = formData.get('file');

    if (typeof phone !== 'string' || !phone.trim()) {
      return NextResponse.json({ error: 'phone is required' }, { status: 400 });
    }
    if (typeof caption !== 'string' || !caption.trim()) {
      return NextResponse.json({ error: 'caption is required' }, { status: 400 });
    }
    if (!(file instanceof File)) {
      return NextResponse.json({ error: 'file (PDF) is required' }, { status: 400 });
    }

    // 1) Upload media to WhatsApp -> get media id
    const mediaId = await uploadWhatsAppDocumentToMediaId(file);

    // 2) Send document message referencing that media id
    const result = await sendDocumentToWhatsApp(phone, caption, mediaId);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Failed to send document', details: result.error },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      mediaId,
      messageId: result.messageId,
    });
  } catch (error: any) {
    console.error('send-document error:', error);
    return NextResponse.json({ error: error?.message || 'Internal server error' }, { status: 500 });
  }
}

