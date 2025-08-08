import { handleEncryptedRequest } from '@/app/middleware/secureApi';
import { db } from '@/lib/db';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  return handleEncryptedRequest(req, async (body) => {
    const { c_name, c_type } = body;

    if (!c_name || !c_type ) {
      throw new Error('All fields required');
    }

    await db.query(
      'INSERT INTO category (c_name, c_type) VALUES (?, ?)',
      [c_name, c_type]
    );

    return { success: true, message: 'Category added' };
  });
}
