---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-05-06T23:08:34.969Z'
id: ci-cd
title: CI/CD
---
## Flujos de trabajo (Workflows) en GitHub

- `pr.yml`:
    - Ejecuta pruebas para todas las solicitudes de extracción (pull requests)
    - Ejecuta `nx affected`, que solo realiza tareas con caché invalidada
    - También utiliza `pkg-pr-new` para publicar vistas previas de paquetes y crear enlaces a nuestros ejemplos
- `release.yml`:
    - Ejecuta pruebas para el código fusionado en ramas de lanzamiento (release branches)
    - Ejecuta `nx run-many`, que realiza todas las tareas y asegura que los resultados estén presentes (necesario para publicar builds)
    - Utiliza [Changesets](https://github.com/changesets/changesets) para manejar el versionado y la publicación

## Nx

Los proyectos de TanStack utilizan Nx para permitir la ejecución rápida de pruebas y builds. Las tareas se paralelizan y almacenan en caché tanto localmente como en CI (Integración Continua). Aunque Nx tiene un extenso sistema de plugins, solo lo utilizamos como un ejecutor de scripts de NPM.

### Archivos de configuración

- `./nx.json`: Archivo de configuración principal, que define dependencias de tareas, entradas y salidas
- `./package.json`: Es necesario especificar manualmente los scripts a nivel raíz (ej. `test:format`)
- `./**/package.json`: Los scripts a nivel de paquete (ej. `build`) se detectan automáticamente

### Agentes de Nx

- Nx permite distribuir tareas en múltiples máquinas de CI, aumentando el número de trabajos que pueden ejecutarse en paralelo
- Tenga en cuenta que esto conlleva un retraso significativo en el inicio
