import { Outlet } from 'react-router-dom';
import { WhatsAppFloatingButton } from '../components/WhatsAppFloatingButton';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <Outlet />
      <WhatsAppFloatingButton />
    </div>
  );
}
