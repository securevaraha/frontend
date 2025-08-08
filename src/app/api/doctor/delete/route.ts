// app/api/hospital/delete/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { handleEncryptedRequest } from '@/app/middleware/secureApi';

export async function POST(req: NextRequest) {
    return handleEncryptedRequest(req, async (body) => {
    const { d_id } = body;

    if (!d_id) {
      throw new Error(' field required');
    }

await db.query('DELETE FROM doctor WHERE d_id = ?', [d_id]);

    return { success: true, message: 'Doctor deleted' };
  });
}
