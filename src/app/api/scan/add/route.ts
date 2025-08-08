import { handleEncryptedRequest } from '@/app/middleware/secureApi';
import { db } from '@/lib/db';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  return handleEncryptedRequest(req, async (body) => {
    const { s_name, isActive } = body;

    if (!s_name ) {
      throw new Error('All fields required');
    }

    await db.query(
      'INSERT INTO scan (s_name, isActive) VALUES (?, ?)',
      [s_name, isActive]
    );

    return { success: true, message: 'Scan added' };
  });
}
