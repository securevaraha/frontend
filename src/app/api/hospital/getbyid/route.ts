// app/api/hospital/getbyid/route.ts
import { NextRequest } from 'next/server';
import { db } from '@/lib/db';
import { handleEncryptedRequest } from '@/app/middleware/secureApi';

// export async function POST(req: NextRequest) {
//   try {
//     const { id } = await req.json();

//     const [rows] = await db.query('SELECT * FROM hospital WHERE id = ?', [id]);
//     const hospital = rows;

//     if (!hospital) {
//       return NextResponse.json({ error: 'Not found' }, { status: 404 });
//     }

//     return NextResponse.json(hospital);
//   } catch (error) {
//     return NextResponse.json({ error: 'Fetch failed' }, { status: 500 });
//   }
// }
export async function POST(req: NextRequest) {
  return handleEncryptedRequest(req, async (body) => {
    const { h_id } = body;
    const [rows] = await db.query('SELECT * FROM hospital WHERE h_id = ?', [h_id]);
    return rows;
  });
}
