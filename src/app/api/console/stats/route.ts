import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const response = await fetch('http://api.varahasdc.co.in/console/stats', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error fetching console stats:', error);
    return NextResponse.json({
      error: 'Failed to fetch console stats',
      details: error.message,
      stack: error.stack,
      query: Object.fromEntries(new URL(request.url).searchParams),
      fetchUrl: 'http://api.varahasdc.co.in/console/stats',
      errorType: 'External API Error'
    }, { status: 500 });
  }
}