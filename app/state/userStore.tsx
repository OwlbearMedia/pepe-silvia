import { create } from 'zustand';
// import { login } from '@/app/lib/api';

interface UserState {
  name: string
  email: string
  login: ({ email, password }: { email: string, password: string }) => void
}

export const useUserStore = create<UserState>()((set) => ({
  name: '',
  email: '',
  login: async ({ email, password }) => {
    try {
      const user = await login({ email, password });
      set({
        name: user.name,
        email: user.email,
      });
    } catch (error) {
      console.error(error);
    }
  },
}));
