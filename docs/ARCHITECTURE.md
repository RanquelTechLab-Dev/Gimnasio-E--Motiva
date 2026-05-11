# Arquitectura — E-Motiva App Gimnasio

## Stack

### Frontend

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- PWA mobile-first

### Backend

- Supabase Auth
- Supabase Postgres
- Supabase Row Level Security
- Supabase Edge Functions
- Supabase Cron / scheduled functions

### Integraciones

- GitHub: repositorio
- Linear: gestión de bloques/issues
- Cloudflare Pages: hosting frontend posterior
- Mailjet: emails
- Google Drive: archivos/documentación
- WhatsApp: contacto flotante simple

## Principio de seguridad

Toda tabla pública de Supabase debe tener RLS habilitado.

No exponer:

- service role key;
- credenciales Mailjet;
- credenciales Google Drive;
- secrets en frontend.

Las operaciones críticas deben ejecutarse con RPC segura o Edge Functions.

## Entidades principales previstas

- profiles
- activities
- plans
- memberships
- payments
- class_sessions
- bookings
- attendance
- student_training_notes
- student_files
- email_logs
- drive_storage_status
- audit_logs

## Edge Functions previstas

- approve_payment
- reserve_class
- cancel_booking
- send_due_reminders
- send_bulk_email_recent_payers
- upload_student_file_to_drive
- check_drive_storage
- cleanup_drive_if_full

## Cloudflare Pages

Cloudflare se conectará posteriormente al repo de GitHub.

Configuración prevista:

- Build command: `npm run build`
- Output directory: `dist`

Variables frontend:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

## Regla de trabajo

El proyecto debe avanzar por bloques pequeños, referenciados desde Linear.

No mezclar setup, schema, UI, reservas, pagos, emails y storage en un mismo bloque.
