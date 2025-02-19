import { useUserStore } from '@/app/state/userStore';

export default function DashboardPage() {
  const { name } = useUserStore();
  return(
    <div>
      <p>Dashboard Page</p>
      <p>Hello, {name}</p>
    </div>
  );
}