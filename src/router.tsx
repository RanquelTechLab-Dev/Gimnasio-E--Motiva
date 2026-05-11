import { createBrowserRouter, Navigate } from 'react-router-dom';
import { RootLayout } from './shared/RootLayout';
import { StudentLayout } from './shared/StudentLayout';
import { AdminLayout } from './shared/AdminLayout';
import { LoginPage } from './pages/LoginPage';
import {
  AdminAttendancePage,
  AdminCalendarPage,
  AdminEmailsPage,
  AdminHomePage,
  AdminPaymentsPage,
  AdminPlansPage,
  AdminSettingsPage,
  AdminStoragePage,
  AdminStudentsPage,
  NotFoundPage,
  StudentBookingsPage,
  StudentCalendarPage,
  StudentHomePage,
  StudentPlanPage,
  StudentProfilePage,
} from './pages/placeholders';

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
