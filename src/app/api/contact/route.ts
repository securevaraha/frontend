import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, scanType, message } = body;

    // Basic validation
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Name, phone, and email are required' },
        { status: 400 }
      );
    }

    // Call your existing API
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://varahasdc.co.in/api';
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone, email, scanType, message })
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json(
        { message: 'Contact form submitted successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: data.error || 'Failed to submit contact form' },
        { status: response.status }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}