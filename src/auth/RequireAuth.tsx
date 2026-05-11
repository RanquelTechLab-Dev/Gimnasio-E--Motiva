import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';
import type { ProfileRole } from './types';

type RequireAuthProps = {
  role?: ProfileRole;
};

export function RequireAuth({ role }: RequireAuthProps) {
  const { user, profile, loading, profileLoading } = useAuth();
  const location = useLocation();

  if (loading || profileLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 text-center text-sm text-slate-600">
        Cargando acceso...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  if (!profile || !profile.active) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="max-w-md rounded-3xl bg-white p-6 text-center shadow-sm ring-1 ring-slate-200">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emotiva-600">Acceso pendiente</p>
          <h1 className="mt-2 text-2xl font-bold text-slate-950">Tu perfil no está activo</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Carolina debe terminar de habilitar tu perfil en E-Motiva antes de que puedas ingresar.
          </p>
        </div>
      </div>
    );
  }

  if (role && profile.role !== role) {
    return <Navigate to="/app" replace />;
  }

  return <Outlet />;
}
