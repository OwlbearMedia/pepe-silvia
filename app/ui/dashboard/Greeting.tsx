'use client';

import { useUserStore } from '@/app/state/userStore';

export default function Greeting() {
  const user = useUserStore();

  return (
    <p>Hello, {user.name}</p>
  )
}
