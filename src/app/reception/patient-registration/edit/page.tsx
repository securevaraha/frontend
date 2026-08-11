'use client';

import AccessDenied from '@/components/AccessDenied';

// This route is intentionally disabled. Always show Access Denied,
// regardless of login state or role.
export default function PatientRegistrationEdit() {
  return <AccessDenied message="This page is currently unavailable." />;
}
