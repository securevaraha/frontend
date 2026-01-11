import { NextRequest, NextResponse } from 'next/server';
import { whatsappService } from '@/lib/whatsapp';

export async function POST(request: NextRequest) {
  try {
    const { phone, message } = await request.json();
    
    if (!phone || !message) {
      return NextResponse.json(
        { error: 'Phone number and message are required' },
        { status: 400 }
      );
    }

    const result = await whatsappService.sendText(phone, message);
    
    return NextResponse.json({
      success: result.success,
      messageId: result.messageId,
      error: result.error
    });
  } catch (error) {
    console.error('WhatsApp test error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'WhatsApp test endpoint',
    usage: 'POST with { phone: "9413129001", message: "Test message" }'
  });
}