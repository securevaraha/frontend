
import { handleEncryptedRequest } from '@/app/middleware/secureApi';
import { db } from '@/lib/db';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  return handleEncryptedRequest(req, async (_body, _req) => {
    const [rows] = await db.query('SELECT * FROM hospital');
    return rows;
  });
}
