import crypto from 'crypto';

const algorithm = 'aes-256-cbc';
const key = crypto.createHash('sha256').update(String(process.env.ENCRYPTION_SECRET || 'my-secret-key')).digest(); // 32 bytes key
const iv = Buffer.alloc(16, 0); // 16 bytes IV (all zero for simplicity, not recommended for production)

export function encrypt(data: any) {
  const json = JSON.stringify(data);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(json, 'utf8', 'base64');
  encrypted += cipher.final('base64');
  return encrypted;
}

export function decrypt(encrypted: string) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, 'base64', 'utf8');
  decrypted += decipher.final('utf8');
  return JSON.parse(decrypted);
}
