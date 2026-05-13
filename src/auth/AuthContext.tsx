import type { Session, User } from '@supabase/supabase-js';
import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { supabase } from '../lib/supabase';
import { AuthContext, type AuthContextValue } from './auth-context';
import { fetchUserProfile } from './profile';
import type { UserProfile } from './types';

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

      const currentUser = data.session?.user ?? null;
      setSession(data.session);
      setUser(currentUser);
      setLoading(false);

      if (currentUser) {
        void loadProfile(currentUser.id);
      } else {
        setProfileResolved(true);
      }
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      const nextUser = nextSession?.user ?? null;
      setSession(nextSession);
      setUser(nextUser);
      setProfileResolved(false);

      if (nextUser) {
        void loadProfile(nextUser.id);
      } else {
        setProfile(null);
        setProfileResolved(true);
      }
    });

    return () => {
      alive = false;
      listener.subscription.unsubscribe();
    };
  }, [loadProfile]);

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
