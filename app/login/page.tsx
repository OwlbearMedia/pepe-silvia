import Link from 'next/link';
import LoginForm from '../ui/LoginForm';

export default function LoginPage() {
  return (
    <div className="">
      <div className="navbar bg-base-100 shadow-xl h-24">
        <h2 className="text-4xl">
          <Link href="/">Pepe Silvia</Link>
        </h2>
      </div>
      <LoginForm />
    </div>
  );
};
