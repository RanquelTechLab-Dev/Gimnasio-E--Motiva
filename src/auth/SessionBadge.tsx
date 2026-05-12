import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

type SessionBadgeProps = {
  variant?: 'light' | 'dark';
};

export function SessionBadge({ variant = 'light' }: SessionBadgeProps) {
  const navigate = useNavigate();
  const { profile, signOut } = useAuth();

  const displayName = profile?.first_name || profile?.last_name ? `${profile.first_name} ${profile.last_name}`.trim() : profile?.email;
  const isDark = variant === 'dark';

  const handleSignOut = async () => {
    await signOut();
    navigate('/login', { replace: true });
  };

  return (
    <div
      className={`mt-4 flex flex-col gap-2 rounded-2xl p-3 text-sm sm:flex-row sm:items-center sm:justify-between ${
        isDark ? 'bg-white/10 text-white' : 'bg-slate-100 text-slate-800'
      }`}
    >
      <div>
        <p className="font-semibold">{displayName}</p>
        <p className={`text-xs ${isDark ? 'text-white/80' : 'text-slate-500'}`}>
          Rol: {profile?.role === 'admin' ? 'Admin' : 'Alumno'}
        </p>
      </div>
      <button
        className={`rounded-full px-4 py-2 text-sm font-semibold ${
          isDark ? 'bg-white text-slate-950 hover:bg-slate-100' : 'bg-slate-950 text-white hover:bg-slate-800'
        }`}
        onClick={handleSignOut}
        type="button"
      >
        Salir
      </button>
    </div>
  );
}
