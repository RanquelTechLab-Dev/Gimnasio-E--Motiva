import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RootLayout } from './shared/RootLayout';
import { StudentLayout } from './shared/StudentLayout';
import { AdminLayout } from './shared/AdminLayout';
import { LoginPage } from './pages/LoginPage';
import { StudentHomePage } from './pages/student/StudentHomePage';
import { StudentCalendarPage } from './pages/student/StudentCalendarPage';
import { StudentBookingsPage } from './pages/student/StudentBookingsPage';
import { StudentPlanPage } from './pages/student/StudentPlanPage';
import { StudentProfilePage } from './pages/student/StudentProfilePage';
import { AdminHomePage } from './pages/admin/AdminHomePage';
import { AdminStudentsPage } from './pages/admin/AdminStudentsPage';
import { AdminPaymentsPage } from './pages/admin/AdminPaymentsPage';
import { AdminCalendarPage } from './pages/admin/AdminCalendarPage';
import { AdminAttendancePage } from './pages/admin/AdminAttendancePage';
import { AdminPlansPage } from './pages/admin/AdminPlansPage';
import { AdminEmailsPage } from './pages/admin/AdminEmailsPage';
import { AdminStoragePage } from './pages/admin/AdminStoragePage';
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: 'login', element: <LoginPage /> },
      {
        path: 'app',
        element: <StudentLayout />,
        children: [
          { index: true, element: <StudentHomePage /> },
          { path: 'calendar', element: <StudentCalendarPage /> },
          { path: 'my-bookings', element: <StudentBookingsPage /> },
          { path: 'my-plan', element: <StudentPlanPage /> },
          { path: 'profile', element: <StudentProfilePage /> },
        ],
      },
      {
        path: 'admin',
        element: <AdminLayout />,
        children: [
          { index: true, element: <AdminHomePage /> },
          { path: 'students', element: <AdminStudentsPage /> },
          { path: 'payments', element: <AdminPaymentsPage /> },
          { path: 'calendar', element: <AdminCalendarPage /> },
          { path: 'attendance', element: <AdminAttendancePage /> },
          { path: 'plans', element: <AdminPlansPage /> },
          { path: 'emails', element: <AdminEmailsPage /> },
          { path: 'storage', element: <AdminStoragePage /> },
          { path: 'settings', element: <AdminSettingsPage /> },
        ],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
