import { handleEncryptedRequest } from '@/app/middleware/secureApi';
import { db } from '@/lib/db';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  return handleEncryptedRequest(req, async (body) => {
    const { d_name, isActive } = body;

    if (!d_name  ) {
      throw new Error('All fields required');
    }

    await db.query(
      'INSERT INTO doctor (d_name, isActive) VALUES (?, ?)',
      [ d_name, isActive]
    );

    return { success: true, message: 'Doctor added' };
  });
}
