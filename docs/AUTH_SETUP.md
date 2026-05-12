# RAN-8 — Auth + roles admin/alumno

## Alcance

Este documento corresponde a RAN-8.

Incluye:

- login con email y contraseña;
- sesión con Supabase Auth;
- lectura de perfil desde `profiles`;
- guardas de rutas para alumno y admin;
- creación manual de usuarios con contraseña provisoria.

No incluye pagos, reservas, Mailjet, Google Drive ni Cloudflare.

## Admin inicial

Email admin confirmado:

```txt
e.motiva.gym@gmail.com
```

## Variables locales para desarrollo

Crear un archivo local llamado `.env.local` en la raíz del proyecto.

No subir `.env.local` a GitHub.

Formato:

```txt
VITE_SUPABASE_URL=...
VITE_SUPABASE_PUBLISHABLE_KEY=...
VITE_WHATSAPP_NUMBER=5493582430953
```

Los valores reales se cargan localmente para desarrollo. En producción se cargarán como variables de entorno en Cloudflare Pages cuando corresponda RAN-15.

## Crear usuario admin en Supabase

En Supabase Dashboard:

1. Ir a Authentication.
2. Ir a Users.
3. Crear usuario nuevo.
4. Email: `e.motiva.gym@gmail.com`.
5. Definir contraseña provisoria.
6. Confirmar email manualmente si Supabase lo requiere.
7. Copiar el `auth.users.id` generado.

Luego crear o vincular el perfil en `public.profiles`:

```sql
insert into public.profiles (
  auth_user_id,
  role,
  first_name,
  last_name,
  email,
  active,
  receives_emails
)
values (
  '<AUTH_USER_ID>',
  'admin',
  'Carolina',
  'E-Motiva',
  'e.motiva.gym@gmail.com',
  true,
  true
);
```

Reemplazar `<AUTH_USER_ID>` por el ID real del usuario creado en Supabase Auth.

## Crear alumno con contraseña provisoria

En Supabase Dashboard:

1. Authentication.
2. Users.
3. Crear usuario nuevo.
4. Email del alumno.
5. Contraseña provisoria.
6. Copiar `auth.users.id`.

Luego crear perfil con rol `student`:

```sql
insert into public.profiles (
  auth_user_id,
  role,
  first_name,
  last_name,
  email,
  active,
  receives_emails
)
values (
  '<AUTH_USER_ID>',
  'student',
  '<NOMBRE>',
  '<APELLIDO>',
  '<EMAIL_ALUMNO>',
  true,
  true
);
```

## Validaciones esperadas

- Sin sesión, `/app` redirige a `/login`.
- Sin sesión, `/admin` redirige a `/login`.
- Alumno con rol `student` entra a `/app`.
- Alumno con rol `student` no entra a `/admin`.
- Admin con rol `admin` entra a `/admin`.
- Perfil inactivo no accede.
