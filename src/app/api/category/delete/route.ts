// app/api/hospital/delete/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { handleEncryptedRequest } from '@/app/middleware/secureApi';

export async function POST(req: NextRequest) {
    return handleEncryptedRequest(req, async (body) => {
    const { c_id } = body;

    if (!c_id) {
      throw new Error(' field required');
    }

await db.query('DELETE FROM category WHERE c_id = ?', [c_id]);

    return { success: true, message: 'Category deleted' };
  });
}
