import { Link } from 'react-router-dom';
import { PageCard } from '../components/PageCard';

type PlaceholderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function PlaceholderPage({ eyebrow, title, description }: PlaceholderProps) {
  return <PageCard eyebrow={eyebrow} title={title} description={description} />;
}

export function StudentHomePage() {
  return (
    <PlaceholderPage
      eyebrow="Mi semana"
      title="Inicio del alumno"
      description="Resumen simple para ver próxima clase, estado del plan, vencimiento, clases disponibles y acceso rápido al calendario."
    />
  );
}

export function StudentCalendarPage() {
  return (
    <PlaceholderPage
      eyebrow="Calendario"
      title="Calendario de clases"
      description="Acá se mostrará el calendario de actividades. En bloques posteriores se conectarán planes, cupos y reservas."
    />
  );
}

export function StudentBookingsPage() {
  return (
    <PlaceholderPage
      eyebrow="Reservas"
      title="Mis reservas"
      description="Listado de clases reservadas, cancelaciones disponibles y estado de asistencia del alumno."
    />
  );
}

export function StudentPlanPage() {
  return (
    <PlaceholderPage
      eyebrow="Plan"
      title="Mi plan activo"
      description="Estado de membresía, vencimiento, actividad habilitada y créditos disponibles si corresponde."
    />
  );
}

export function StudentProfilePage() {
  return (
    <PlaceholderPage
      eyebrow="Perfil"
      title="Mis datos"
      description="Datos personales editables, contacto de emergencia y preferencia para recibir comunicaciones por email."
    />
  );
}

export function AdminHomePage() {
  return (
    <PlaceholderPage
      eyebrow="Hoy"
      title="Dashboard de administración"
      description="Vista rápida para Carolina: clases de hoy, pagos vencidos, vencimientos próximos, alumnos activos y alertas."
    />
  );
}

export function AdminStudentsPage() {
  return (
    <PlaceholderPage
      eyebrow="Alumnos"
      title="Gestión de alumnos"
      description="Alta, baja, edición, ficha del alumno, plan de entrenamiento, observaciones, pagos y archivos."
    />
  );
}

export function AdminPaymentsPage() {
  return (
    <PlaceholderPage
      eyebrow="Pagos"
      title="Pagos manuales"
      description="Registro y aprobación de pagos en efectivo o transferencia recibida por WhatsApp."
    />
  );
}

export function AdminCalendarPage() {
  return (
    <PlaceholderPage
      eyebrow="Calendario"
      title="Gestión de clases"
      description="Crear, modificar y cancelar clases, horarios, actividades y cupos desde el panel admin."
    />
  );
}

export function AdminAttendancePage() {
  return (
    <PlaceholderPage
      eyebrow="Asistencia"
      title="Control de asistencia"
      description="Marcar asistió, ausente o canceló para cada alumno inscripto en una clase."
    />
  );
}

export function AdminPlansPage() {
  return (
    <PlaceholderPage
      eyebrow="Planes"
      title="Planes y precios"
      description="Administración de actividades, precios, límites semanales y paquetes personalizados."
    />
  );
}

export function AdminEmailsPage() {
  return (
    <PlaceholderPage
      eyebrow="Emails"
      title="Comunicaciones"
      description="Emails con Mailjet: recordatorios, avisos operativos y campañas a pagadores de los últimos 6 meses."
    />
  );
}

export function AdminStoragePage() {
  return (
    <PlaceholderPage
      eyebrow="Archivos"
      title="Google Drive"
      description="Control de documentación del alumno, uso de espacio y alertas cuando quede 10% libre."
    />
  );
}

export function AdminSettingsPage() {
  return (
    <PlaceholderPage
      eyebrow="Configuración"
      title="Configuración general"
      description="Datos básicos de E-Motiva, WhatsApp, preferencias operativas y variables visibles de la app."
    />
  );
}

export function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-10">
      <div className="w-full max-w-lg">
        <PageCard eyebrow="404" title="Página no encontrada" description="La ruta solicitada no existe en E-Motiva.">
          <Link className="inline-flex rounded-2xl bg-emotiva-600 px-4 py-3 font-semibold text-white" to="/login">
            Volver al acceso
          </Link>
        </PageCard>
      </div>
    </div>
  );
}
