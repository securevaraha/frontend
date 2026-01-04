import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    // Basic validation
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, phone, email and message are required' },
        { status: 400 }
      );
    }

    // Call live backend API directly
    const response = await fetch('https://varahasdc.co.in/api/web/enquiries', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, email, message })
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return NextResponse.json(
        { success: true, message: 'Enquiry submitted successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { 
          success: false, 
          error: data.error || 'Failed to submit enquiry',
          details: data.details || 'Backend API error'
        },
        { status: response.status || 500 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to create enquiry',
        details: error instanceof Error ? error.message : 'Network or server error'
      },
      { status: 500 }
    );
  }
}