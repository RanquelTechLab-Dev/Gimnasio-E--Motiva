import type { Session, User } from '@supabase/supabase-js';
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import { fetchUserProfile } from './profile';
import type { UserProfile } from './types';

type AuthContextValue = {
  user: User | null;
  session: Session | null;
  profile: UserProfile | null;
  loading: boolean;
  profileLoading: boolean;
  profileResolved: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  refreshProfile: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [profileLoading, setProfileLoading] = useState(false);
  const [profileResolved, setProfileResolved] = useState(false);

  const loadProfile = useCallback(async (authUserId: string) => {
    setProfileLoading(true);
    setProfileResolved(false);
    try {
      const nextProfile = await fetchUserProfile(authUserId);
      setProfile(nextProfile);
      setProfileResolved(true);
    } finally {
      setProfileLoading(false);
    }
  }, []);

  const refreshProfile = useCallback(async () => {
    if (!user) {
      setProfile(null);
      setProfileResolved(true);
      return;
    }

    await loadProfile(user.id);
  }, [loadProfile, user]);

  const signIn = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
  }, []);

  const signOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }, []);

  useEffect(() => {
    let alive = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!alive) return;

      setSession(data.session);
      setUser(data.session?.user ?? null);
      setLoading(false);
      if (!data.session?.user) {
        setProfileResolved(true);
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setUser(nextSession?.user ?? null);
      setProfileResolved(false);
      if (!nextSession?.user) {
        setProfile(null);
        setProfileResolved(true);
      }
    });

    return () => {
      alive = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!user) {
      setProfile(null);
      return;
    }

    void loadProfile(user.id);
  }, [loadProfile, user]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      session,
      profile,
      loading,
      profileLoading,
      profileResolved,
      signIn,
      signOut,
      refreshProfile,
    }),
    [user, session, profile, loading, profileLoading, profileResolved, signIn, signOut, refreshProfile],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider.');
  }

  return context;
}
