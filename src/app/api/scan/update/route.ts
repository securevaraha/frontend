// app/api/hospital/update/route.ts
import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { handleEncryptedRequest } from '@/app/middleware/secureApi';

export async function POST(req: NextRequest) {
    return handleEncryptedRequest(req, async (body) => {
      const { s_id, s_name, isActive } = body;
  
      if (!s_name ) {
        throw new Error('All fields required');
      }
  
await db.query(
      'UPDATE scan SET s_name=?, isActive=?WHERE s_id=?',
      [s_id, s_name, isActive]
    );
  
      return { success: true, message: 'Scan updated' };
    });
}
