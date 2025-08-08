// app/api/hospital/update/route.ts
import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { handleEncryptedRequest } from '@/app/middleware/secureApi';

export async function POST(req: NextRequest) {
    return handleEncryptedRequest(req, async (body) => {
      const { c_id, c_name, c_type } = body;
  
      if (!c_name || !c_type ) {
        throw new Error('All fields required');
      }
  
await db.query(
      'UPDATE category SET c_name=?, c_type=?WHERE c_id=?',
      [c_id, c_name, c_type]
    );
  
      return { success: true, message: 'Category updated' };
    });
}
