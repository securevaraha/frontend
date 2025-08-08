import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import jwt from 'jsonwebtoken';
import { handleEncryptedRequest } from '@/app/middleware/secureApi';
const SECRET_KEY = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(req: NextRequest) {
      return handleEncryptedRequest(req, async (body) => {
  const { username, password, admin_type } = body;

  const [rows]: any = await db.query(
    'SELECT * FROM admin WHERE username = ? AND password = ? AND admin_id = ?',
    [username, password, admin_type]
  );

  if (rows.length > 0) {
      const user = rows[0];

    // Create JWT token
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        admin_type: user.admin_type,
      },
      SECRET_KEY,
      { expiresIn: '30m' }
    );

    return ({ success: true, token: token,  admin_type: user.admin_type });
  }
})
}