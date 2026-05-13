import { useState, type FormEvent } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import { PageCard } from '../components/PageCard';

type LocationState = {
  from?: string;
  accessError?: string;
};

function getRedirectPath(role?: string, fallback?: string) {
  if (fallback && fallback !== '/login') return fallback;
  return role === 'admin' ? '/admin' : '/app';
}

export function LoginPage() {
  const location = useLocation();
  const { user, profile, loading, profileLoading, signIn } = useAuth();
  const locationState = location.state as LocationState | null;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(locationState?.accessError ?? null);

  if (!loading && !profileLoading && user && profile?.active) {
    return <Navigate to={getRedirectPath(profile.role, locationState?.from)} replace />;
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      await signIn(email.trim(), password);
    } catch (signInError) {
      setError(signInError instanceof Error ? signInError.message : 'No se pudo iniciar sesión.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <PageCard
          eyebrow="Acceso"
          title="Ingresar a E-Motiva"
          description="Carolina crea cada cuenta con una contraseña provisoria. No hay registro público de alumnos."
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Email</span>
              <input
                autoComplete="email"
                className="mt-1 w-full rounded-2xl border border-slate-300 px-4 py-3"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="tu@email.com"
                required
                type="email"
                value={email}
              />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Contraseña</span>
              <input
                autoComplete="current-password"
                className="mt-1 w-full rounded-2xl border border-slate-300 px-4 py-3"
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Tu contraseña"
                required
                type="password"
                value={password}
              />
            </label>
            {error ? <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">{error}</p> : null}
            <button
              className="w-full rounded-2xl bg-emotiva-600 px-4 py-3 font-semibold text-white shadow-sm hover:bg-emotiva-700 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={submitting || loading || profileLoading}
              type="submit"
            >
              {submitting ? 'Ingresando...' : 'Entrar'}
            </button>
            <p className="text-xs leading-5 text-slate-500">
              Si no tenés usuario o no recordás la contraseña, consultá con Carolina por WhatsApp.
            </p>
          </form>
        </PageCard>
      </div>
    </div>
  );
}
