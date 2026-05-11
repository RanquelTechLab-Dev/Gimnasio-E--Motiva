# E-Motiva App Gimnasio

Aplicación web/PWA para administración del gimnasio **E-Motiva**.

## Objetivo

Construir una app simple, económica y funcional para que Carolina administre:

- alumnos;
- pagos manuales;
- membresías;
- clases y cupos;
- reservas;
- asistencia;
- planes de entrenamiento;
- observaciones;
- archivos/documentación;
- emails;
- calendario de actividades.

Los alumnos podrán ingresar desde celular, computadora o tablet para ver calendario, reservar clases permitidas por su plan, cancelar cuando corresponda, ver su membresía y actualizar datos básicos.

## Stack definido

- React + Vite + TypeScript
- Tailwind CSS
- Supabase Auth + Postgres + RLS + Edge Functions
- GitHub como repositorio
- Linear como organización del trabajo por bloques
- Cloudflare Pages para hosting posterior
- Mailjet para emails
- Google Drive gratuito para archivos/documentación
- WhatsApp flotante: `+5493582430953`

## Forma de trabajo

El desarrollo se ejecuta por bloques chicos y trazables en Linear.

Bloque actual: `RAN-5 — Preparación y alineación del proyecto`.

## Reglas principales

- No pagos online.
- No Mercado Pago.
- No Stripe.
- No WhatsApp API paga.
- No app nativa.
- No secretos en frontend.
- Supabase RLS obligatorio.
- Cloudflare se conectará después manualmente si hace falta.

## Regla Cognitivo / Receso

El cronograma puede mostrar `Receso 11:00-15:00` y también `Cognitivo 14:00-15:00`.

Regla de negocio: Carolina maneja ese horario según demanda. Si tiene alumnos en Cognitivo, activa la clase en ese horario; si no hay alumnos, el horario queda como receso/no disponible.
