import { create } from 'zustand';
import { User } from '@supabase/supabase-js';
import { supabase } from './supabase';

interface UserState {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => Promise<void>;
}

export const useStore = create<UserState>((set) => ({
  user: null,
  loading: true,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
  logout: async () => {
    await supabase.auth.signOut();
    set({ user: null });
  },
}));

// Initialize auth state
supabase.auth.getSession().then(({ data: { session } }) => {
  useStore.getState().setUser(session?.user ?? null);
  useStore.getState().setLoading(false);
});

// Listen for auth changes
supabase.auth.onAuthStateChange((_event, session) => {
  useStore.getState().setUser(session?.user ?? null);
  useStore.getState().setLoading(false);
});
