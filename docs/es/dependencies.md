---
source-updated-at: '2024-07-11T14:20:05.000Z'
translation-updated-at: '2025-05-06T23:08:28.426Z'
id: dependencies
title: Dependencies
---
# Dependencias

Utilizamos 3 herramientas separadas para ayudar a gestionar nuestras dependencias y evitar que el directorio `node_modules` crezca innecesariamente.

### Sherif

- Sherif asegura que todas las referencias a una dependencia en todo el monorepositorio utilicen la misma versión
- Esto ayuda a evitar problemas de resolución con pnpm, como conflictos de tipos por tener 2 o más versiones incompatibles de la misma dependencia instaladas

### Knip

- Knip puede detectar dependencias no utilizadas dentro de los archivos `package.json`
- Esto resulta en menos paquetes instalados innecesariamente por los desarrolladores

### Renovate

- Renovate es un bot que se ejecuta en GitHub para escanear dependencias obsoletas o inseguras
- Esto reduce la carga para los mantenedores al enviar automáticamente PRs
