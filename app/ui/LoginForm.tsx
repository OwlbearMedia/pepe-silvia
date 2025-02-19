'use client';

import { useUserStore } from '../state/userStore';
import EmailInput from '@/app/ui/inputs/EmailInput';
import PasswordInput from '@/app/ui/inputs/PasswordInput';

export default function LoginForm() {
  const { login } = useUserStore();

  function signIn(data: FormData) {
    const email = data.get('email') as string;
    const password = data.get('password') as string;

    if (email && password) {
      const what = login({ email, password });
      console.log(what);
    }
  }

  return (
    <form
      className="max-w-lg m-auto m-0 my-20 px-8"
      name="login"
      action={signIn}
    >
      <fieldset>
        <legend className="text-xl font-semibold my-4">Sign in</legend>
        <EmailInput />
        <PasswordInput min="6" max="20" />
      </fieldset>
      <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
  );
};
