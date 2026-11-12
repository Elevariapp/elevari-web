# ADR 0001 — Base técnica inicial del repositorio Web

- Estado: aceptado para la base inicial del proyecto.
- Fecha: 2026-11-12
- Autor: Elevari

## Contexto

La arquitectura documentada para Elevari establece Web con Next.js, React y TypeScript, usando la API oficial de Fastify para reservas y pagos. Antes del desarrollo del MVP se necesita una base técnica mínima para avanzar sin duplicar lógica o crear tecnologías paralelas.

## Decisión

Crear una base mínima de Next.js con TypeScript para el repositorio `elevari-web`, manteniendo la separación entre UI y API. La base no incluye reservas ni pagos reales; solo define estructura, configuración y punto de entrada para comenzar el desarrollo controlado.

## Consecuencias

- El repositorio web queda funcional como punto de partida.
- El equipo puede iniciar desarrollo real sin mezclar backend con UI.
- Se conserva la regla de que la lógica de negocio debe vivir en la API oficial.
- La base requiere validación posterior con contrato API real, flujo de reserva y QA.

## Estado de implementación

Preparada la base inicial de proyecto con configuración de Next.js, App Router, CSS base y README de arranque.
