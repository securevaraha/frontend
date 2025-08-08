// app/api/hospital/getbyid/route.ts
import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { handleEncryptedRequest } from '@/app/middleware/secureApi';

export async function POST(req: NextRequest) {
  return handleEncryptedRequest(req, async (body) => {
    const { c_id } = body;
    const [rows] = await db.query('SELECT * FROM category WHERE c_id = ?', [c_id]);
    return rows;
  });
}
