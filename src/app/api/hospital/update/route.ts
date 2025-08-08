// app/api/hospital/update/route.ts
import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { handleEncryptedRequest } from '@/app/middleware/secureApi';

export async function POST(req: NextRequest) {
    return handleEncryptedRequest(req, async (body) => {
      const { h_id, name, h_short, h_type, h_address, h_contact } = body;
  
      if (!name || !h_short || !h_type || !h_address || !h_contact) {
        throw new Error('All fields required');
      }
  
await db.query(
      'UPDATE hospital SET name=?, h_short=?, h_type=?, h_address=?, h_contact=? WHERE h_id=?',
      [name, h_short, h_type, h_address, h_contact, h_id]
    );
  
      return { success: true, message: 'Hospital updated' };
    });
}
