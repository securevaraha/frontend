import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { handleEncryptedRequest } from '@/app/middleware/secureApi';

export async function POST(req: NextRequest) {
  return handleEncryptedRequest(req, async (body) => {
    if (body.adminList === true) {
      const [rows] = await db.query('SELECT admin_id, admin_type FROM admin');
      return { success: true, admins: rows };
    }

    return { success: false, message: 'adminList flag not set to true in body' };
  });
}
