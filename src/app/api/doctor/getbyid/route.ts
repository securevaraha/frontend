// app/api/hospital/getbyid/route.ts
import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { handleEncryptedRequest } from '@/app/middleware/secureApi';

export async function POST(req: NextRequest) {
  return handleEncryptedRequest(req, async (body) => {
    const { d_id } = body;
    const [rows] = await db.query('SELECT * FROM doctor WHERE d_id = ?', [d_id]);
    return rows;
  });
}
