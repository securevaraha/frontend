// app/api/hospital/delete/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { handleEncryptedRequest } from '@/app/middleware/secureApi';

export async function POST(req: NextRequest) {
//   try {
//     const { h_id } = await req.json();

//     await db.query('DELETE FROM hospital WHERE h_id = ?', [h_id]);

//     return NextResponse.json({ success: true, message: 'Hospital deleted' });
//   } catch (error) {
//     return NextResponse.json({ error: 'Delete failed' }, { status: 500 });
//   }

    return handleEncryptedRequest(req, async (body) => {
    const { h_id } = body;

    if (!h_id) {
      throw new Error(' field required');
    }

await db.query('DELETE FROM hospital WHERE h_id = ?', [h_id]);

    return { success: true, message: 'Hospital deleted' };
  });
}
