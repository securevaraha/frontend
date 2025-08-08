import { handleEncryptedRequest } from '@/app/middleware/secureApi';
import { db } from '@/lib/db';
import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  return handleEncryptedRequest(req, async (body) => {
    const { name, h_short, h_type, h_contact, h_address } = body;

    if (!name || !h_short || !h_type || !h_address || !h_contact) {
      throw new Error('All fields required');
    }

    await db.query(
      'INSERT INTO hospital (name, h_short, h_type, h_contact, h_address) VALUES (?, ?, ?, ?, ?)',
      [name, h_short, h_type, h_contact, h_address]
    );

    return { success: true, message: 'Hospital added' };
  });
}
