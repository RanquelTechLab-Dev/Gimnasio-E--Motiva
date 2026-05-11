import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export function SessionBadge() {
  const navigate = useNavigate();
  const { profile, signOut } = useAuth();

  const displayName = profile?.first_name || profile?.last_name ? `${profile.first_name} ${profile.last_name}`.trim() : profile?.email;

  const handleSignOut = async () => {
    await signOut();
    navigate('/login', { replace: true });
  };

  return (
    <div className="mt-4 flex flex-col gap-2 rounded-2xl bg-white/10 p-3 text-sm sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-semibold">{displayName}</p>
        <p className="text-xs opacity-80">Rol: {profile?.role === 'admin' ? 'Admin' : 'Alumno'}</p>
      </div>
      <button
        className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100"
        onClick={handleSignOut}
        type="button"
      >
        Salir
      </button>
    </div>
  );
}
