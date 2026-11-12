# Elevari Web

Proyecto base para iniciar el desarrollo de la experiencia web de Elevari.

## Objetivo

Dar una base técnica mínima con Next.js + React + TypeScript, manteniendo la lógica de negocio en la API oficial y dejando la estructura lista para la fase de exploración, reservas, pago y facturación.

## Reglas de desarrollo

- La API oficial es la fuente de verdad para reservas, pagos y permisos.
- No duplicar lógica de negocio en Web.
- No introducir proveedores u overengineering sin validación documental.
- La decisión de infraestructura y pagos debe seguir la referencia de `elevari-docs`.

## Arranque

```bash
npm install
npm run dev
```

## Verificación rápida

```bash
npm run check
npm run build
```
