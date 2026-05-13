import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './useAuth';

type ProtectedRouteProps = {
  requireAdmin?: boolean;
};

export function ProtectedRoute({ requireAdmin = false }: ProtectedRouteProps) {
  const location = useLocation();
  const { user, profile, loading, profileLoading, profileResolved } = useAuth();

  if (loading || profileLoading || (user && !profileResolved)) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emotiva-600">E-Motiva</p>
          <p className="mt-2 text-lg font-bold text-slate-900">Cargando acceso...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  if (!profile || !profile.active) {
    return <Navigate to="/login" replace state={{ accessError: 'Tu perfil no está activo. Consultá con Carolina.' }} />;
  }

  if (requireAdmin && profile.role !== 'admin') {
    return <Navigate to="/app" replace state={{ accessError: 'No tenés permisos de administración.' }} />;
  }

  return <Outlet />;
}
