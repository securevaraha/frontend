import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    console.log('Upload report API called');
    const formData = await request.formData();
    const report = formData.get('report') as File;
    const reportName = formData.get('reportName') as string;
    const cro = formData.get('cro') as string;
    const patientName = formData.get('patientName') as string;
    const conId = formData.get('conId') as string;
    const contactNumber = formData.get('contactNumber') as string;

    console.log('Received data:', { reportName, cro, patientName, conId, contactNumber });

    if (!report || !reportName || !cro || !conId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Generate unique filename with random number
    const randomNum = Math.floor(Math.random() * 10000);
    const fileName = `${cro.replace(/\//g, '_')}_${reportName}_${randomNum}.pdf`;
    
    // Save file locally first
    const bytes = await report.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'reports');
    const filePath = path.join(uploadDir, fileName);
    
    try {
      await writeFile(filePath, buffer);
      console.log('File saved locally:', filePath);
    } catch (fileError) {
      console.error('File save error:', fileError);
    }

    // Upload to backend API
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.varahasdc.co.in';
    const uploadFormData = new FormData();
    uploadFormData.append('report', report);
    uploadFormData.append('reportName', reportName);
    uploadFormData.append('cro', cro);
    uploadFormData.append('patientName', patientName);
    uploadFormData.append('conId', conId);
    uploadFormData.append('fileName', fileName);

    const uploadResponse = await fetch(`${API_BASE_URL}/console/upload-report`, {
      method: 'POST',
      body: uploadFormData
    });

    if (uploadResponse.ok) {
      // Send WhatsApp message if contact number is provided
      if (contactNumber) {
        try {
          const whatsappMessage = `Hello ${patientName}, your medical report for CRO: ${cro} has been uploaded successfully. You can collect it from Varaha SDC. Thank you!`;
          
          // NEW: send PDF document directly via WhatsApp Cloud API (server-side)
          // Assumes contactNumber is customer WhatsApp mobile.
          const sendForm = new FormData();
          sendForm.append('phone', contactNumber);
          sendForm.append('caption', whatsappMessage);
          sendForm.append('file', report);

          const whatsappResponse = await fetch('http://localhost:3000/api/whatsapp/send-document', {
            method: 'POST',
            body: sendForm,
          });

          if (whatsappResponse.ok) {
            console.log('WhatsApp document sent successfully');
          } else {
            const err = await whatsappResponse.text().catch(() => '');
            console.error('WhatsApp document send failed:', whatsappResponse.status, err);
          }
        } catch (whatsappError) {
          console.error('WhatsApp sending failed:', whatsappError);
        }
      }

      return NextResponse.json(
        { 
          message: 'Report uploaded and notification sent successfully',
          fileName: fileName,
          whatsappSent: !!contactNumber
        },
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