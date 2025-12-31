import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const report = formData.get('report') as File;
    const reportName = formData.get('reportName') as string;
    const cro = formData.get('cro') as string;
    const patientName = formData.get('patientName') as string;
    const conId = formData.get('conId') as string;
    const contactNumber = formData.get('contactNumber') as string;

    if (!report || !reportName || !cro || !conId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Upload to your backend API
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://varahasdc.co.in/api';
    const uploadFormData = new FormData();
    uploadFormData.append('report', report);
    uploadFormData.append('reportName', reportName);
    uploadFormData.append('cro', cro);
    uploadFormData.append('patientName', patientName);
    uploadFormData.append('conId', conId);

    const uploadResponse = await fetch(`${API_BASE_URL}/console/upload-report`, {
      method: 'POST',
      body: uploadFormData
    });

    if (uploadResponse.ok) {
      // Send WhatsApp message if contact number is provided
      if (contactNumber) {
        try {
          const whatsappMessage = `Hello ${patientName}, your medical report for CRO: ${cro} has been uploaded successfully. You can collect it from Varaha SDC. Thank you!`;
          
          const whatsappResponse = await fetch(`${API_BASE_URL}/whatsapp/send`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              phone: contactNumber,
              message: whatsappMessage,
              cro: cro
            })
          });

          if (whatsappResponse.ok) {
            console.log('WhatsApp message sent successfully');
          }
        } catch (whatsappError) {
          console.error('WhatsApp sending failed:', whatsappError);
          // Don't fail the main request if WhatsApp fails
        }
      }

      return NextResponse.json(
        { message: 'Report uploaded and notification sent successfully' },
        { status: 200 }
      );
    } else {
      const errorData = await uploadResponse.json();
      return NextResponse.json(
        { error: errorData.error || 'Failed to upload report' },
        { status: uploadResponse.status }
      );
    }
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}