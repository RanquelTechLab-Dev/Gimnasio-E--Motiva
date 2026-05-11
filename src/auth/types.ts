export type ProfileRole = 'admin' | 'student';

export type UserProfile = {
  id: string;
  auth_user_id: string | null;
  role: ProfileRole;
  first_name: string;
  last_name: string;
  email: string;
  active: boolean;
};
