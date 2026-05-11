import { PageCard } from '../components/PageCard';

export function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        <PageCard
          eyebrow="Acceso"
          title="Ingresar a E-Motiva"
          description="En el próximo bloque se conectará Supabase Auth. Carolina creará las cuentas con contraseña provisoria."
        >
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Email</span>
              <input className="mt-1 w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="brunicarolina98@gmail.com" />
            </label>
            <label className="block">
              <span className="text-sm font-semibold text-slate-700">Contraseña</span>
              <input className="mt-1 w-full rounded-2xl border border-slate-300 px-4 py-3" placeholder="Contraseña provisoria" type="password" />
            </label>
            <button className="w-full rounded-2xl bg-emotiva-600 px-4 py-3 font-semibold text-white shadow-sm hover:bg-emotiva-700">
              Entrar
            </button>
            <p className="text-xs leading-5 text-slate-500">
              Placeholder visual: todavía no autentica usuarios ni conecta Supabase.
            </p>
          </div>
        </PageCard>
      </div>
    </div>
  );
}
