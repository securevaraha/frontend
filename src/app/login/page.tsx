import { redirect } from 'next/navigation';

export default function LoginRedirect() {
  redirect('/vdc_login');
}
