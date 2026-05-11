import { NavLink, Outlet } from 'react-router-dom';

const studentLinks = [
  { to: '/app', label: 'Inicio', end: true },
  { to: '/app/calendar', label: 'Calendario' },
  { to: '/app/my-bookings', label: 'Reservas' },
  { to: '/app/my-plan', label: 'Mi plan' },
  { to: '/app/profile', label: 'Perfil' },
];

export function StudentLayout() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 py-4 sm:px-6 lg:px-8">
      <header className="mb-4 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emotiva-600">E-Motiva</p>
        <h1 className="text-2xl font-bold text-slate-950">Panel del alumno</h1>
        <nav className="mt-4 flex gap-2 overflow-x-auto pb-1">
          {studentLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition ${
                  isActive ? 'bg-emotiva-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
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
