import { NextRequest, NextResponse } from 'next/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.varahasdc.co.in';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const report      = formData.get('report');
    const reportName  = formData.get('reportName');
    const cro         = formData.get('cro');
    const patientName = formData.get('patientName');
    const conId       = formData.get('conId');
    const blobUrl     = formData.get('blobUrl'); // Vercel blob URL passed from frontend

    if (!report || !reportName || !cro || !conId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const backendForm = new FormData();
    backendForm.append('report',      report);
    backendForm.append('reportName',  reportName as string);
    backendForm.append('cro',         cro as string);
    backendForm.append('patientName', (patientName as string) || '');
    backendForm.append('conId',       conId as string);
    backendForm.append('blobUrl',     (blobUrl as string) || '');

    const backendRes = await fetch(`${API_BASE_URL}/console/upload-report`, {
      method: 'POST',
      body: backendForm,
    });

    const data = await backendRes.json().catch(() => ({}));

    if (!backendRes.ok) {
      return NextResponse.json(
        { error: data.error || 'Backend upload failed', details: data.details },
        { status: backendRes.status }
      );
    }

    return NextResponse.json({
      success:          true,
      fileName:         data.fileName,
      blobUrl:          data.blobUrl,
      whatsappSent:     data.whatsappSent,
      whatsappMessageId: data.whatsappMessageId,
    });

  } catch (error: any) {
    console.error('Upload proxy error:', error);
    return NextResponse.json({ error: error?.message || 'Internal server error' }, { status: 500 });
  }
}
