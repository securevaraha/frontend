// app/api/hospital/delete/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { handleEncryptedRequest } from '@/app/middleware/secureApi';

export async function POST(req: NextRequest) {
    return handleEncryptedRequest(req, async (body) => {
    const { s_id } = body;

    if (!s_id) {
      throw new Error(' field required');
    }

await db.query('DELETE FROM scan WHERE s_id = ?', [s_id]);

    return { success: true, message: 'Scan deleted' };
  });
}
