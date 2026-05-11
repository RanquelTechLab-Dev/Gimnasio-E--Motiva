import { NavLink, Outlet } from 'react-router-dom';

const adminLinks = [
  { to: '/admin', label: 'Hoy', end: true },
  { to: '/admin/students', label: 'Alumnos' },
  { to: '/admin/payments', label: 'Pagos' },
  { to: '/admin/calendar', label: 'Calendario' },
  { to: '/admin/attendance', label: 'Asistencia' },
  { to: '/admin/plans', label: 'Planes' },
  { to: '/admin/emails', label: 'Emails' },
  { to: '/admin/storage', label: 'Archivos' },
  { to: '/admin/settings', label: 'Config.' },
];

export function AdminLayout() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
      <header className="mb-4 rounded-3xl bg-slate-950 p-4 text-white shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emotiva-100">E-Motiva</p>
        <h1 className="text-2xl font-bold">Panel de administración</h1>
        <nav className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {adminLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? 'bg-white text-slate-950' : 'bg-white/10 text-white hover:bg-white/20'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="flex-1 pb-24">
        <Outlet />
      </main>
    </div>
  );
}
