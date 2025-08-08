import { decrypt, encrypt } from "@/lib/crypto";


export async function securePost(url: string, payload: any) {
  const encrypted = encrypt(payload);
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: encrypted,
  });

  const { data } = await res.json();
  return decrypt(data);
}
