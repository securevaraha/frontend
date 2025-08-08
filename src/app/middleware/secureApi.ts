import { decrypt, encrypt } from '@/lib/crypto';
import { NextRequest, NextResponse } from 'next/server';


type Handler = (body: any, req: NextRequest) => Promise<any>;

export async function handleEncryptedRequest(req: NextRequest, handler: Handler) {
  try {
    // Step 1: Read and decrypt request body
    const encryptedBody = await req.text();
    const decryptedBody = encryptedBody != null ? decrypt(encryptedBody) : {};

    // Step 2: Pass decrypted data to actual logic
    const result = await handler(decryptedBody, req);

    // Step 3: Encrypt response and return
    const encrypted = encrypt(result);
    return NextResponse.json({ data: encrypted });
  } catch (err: any) {
    console.error('API Middleware Error:', err);
    const encrypted = encrypt({ error: err.message || 'Internal Server Error' });
    return NextResponse.json({ data: encrypted }, { status: 500 });
  }
}
