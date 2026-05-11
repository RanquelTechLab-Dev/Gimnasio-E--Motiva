import { supabase } from '../lib/supabase';
import type { UserProfile } from './types';

export async function fetchUserProfile(authUserId: string): Promise<UserProfile | null> {
  const { data, error } = await supabase
    .from('profiles')
    .select('id, auth_user_id, role, first_name, last_name, email, active')
    .eq('auth_user_id', authUserId)
    .maybeSingle();

  if (error) {
    throw error;
  }

  return data as UserProfile | null;
}
