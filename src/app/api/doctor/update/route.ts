// app/api/hospital/update/route.ts
import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { handleEncryptedRequest } from '@/app/middleware/secureApi';

export async function POST(req: NextRequest) {
    return handleEncryptedRequest(req, async (body) => {
      const { d_id, d_name, isActive, } = body;
  
      if (!d_name) {
        throw new Error('All fields required');
      }
  
await db.query(
      'UPDATE doctor SET d_name=?, isActive=? WHERE d_id=?',
      [ d_name, isActive,d_id]
    );
  
      return { success: true, message: 'Doctor updated' };
    });
}
