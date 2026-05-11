# Alcance funcional — E-Motiva App Gimnasio

## Objetivo general

Crear una aplicación web/PWA para que Carolina administre el gimnasio E-Motiva y para que los alumnos puedan autogestionar reservas desde celular, computadora o tablet.

## Roles

### Admin / Carolina

Puede:

- crear, editar y desactivar alumnos;
- asignar planes;
- registrar pagos manuales;
- aprobar pagos;
- ver quién pagó y quién no;
- crear y modificar clases/horarios;
- tomar asistencia;
- cargar plan de entrenamiento;
- cargar observaciones;
- subir/ver/borrar archivos;
- enviar emails;
- modificar precios y actividades.

### Alumno

Puede:

- iniciar sesión;
- ver calendario;
- reservar clases permitidas por su plan;
- cancelar según reglas;
- ver su plan y vencimiento;
- ver clases personalizadas restantes;
- editar datos básicos;
- tildar/destildar emails informativos;
- contactar por WhatsApp.

No puede:

- modificar pagos;
- modificar plan;
- modificar vencimiento;
- modificar créditos;
- ver datos de otros alumnos;
- modificar asistencia;
- acceder a notas privadas de Carolina.

## Pagos

No hay pago online.

Métodos:

- efectivo;
- transferencia;
- comprobante enviado por WhatsApp.

Carolina registra y aprueba manualmente el pago. Al aprobarlo, el sistema habilita o renueva la membresía.

## Reservas

Un alumno solo puede reservar si:

- está autenticado;
- tiene membresía activa o paquete vigente;
- el plan permite esa actividad;
- hay cupo;
- no supera el límite semanal si aplica;
- tiene créditos si es personalizado.

## Cancelaciones

### Funcional / Neurofuncional / Semipersonalizado / Niños / Cognitivo

El alumno puede anotarse cuando quiera, siempre que haya cupo y su plan lo permita. No aplica cancelación obligatoria 24 hs.

### Personalizado 1:1

- Si cancela con 24 hs o más de anticipación, no pierde la clase.
- Si cancela con menos de 24 hs, se cobra como dada.
- Si no asiste, se cobra como dada.

## Cognitivo / Receso

El horario Cognitivo 14:00-15:00 puede convivir con el bloque Receso 11:00-15:00. Carolina decide según demanda: si hay alumnos en Cognitivo, activa la clase; si no hay alumnos, queda como receso/no disponible.

## Archivos / documentación

Cada alumno puede tener:

- plan de entrenamiento;
- observaciones;
- archivos/documentación.

Los archivos reales se almacenarán en Google Drive. Supabase guardará metadata.

Reglas:

- sin límite por archivo;
- sin límite por alumno;
- aviso cuando quede 10% de espacio libre en Drive;
- si Drive se llena, borrar documentación/archivos del alumno que más tiempo lleve sin pagar membresía o clase;
- no borrar pagos ni historial financiero;
- registrar auditoría.

## Emails

Usar Mailjet para:

- recordatorios de vencimiento 5/3/1/0 días;
- aviso de pago aprobado;
- clases personalizadas restantes;
- emails masivos a alumnos que pagaron en últimos 6 meses;
- alertas de Google Drive.

El alumno tiene `receives_emails` activado por defecto y puede destildarlo para comunicaciones informativas.
