---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T19:07:14.083Z'
id: eslint
title: ESLint
---
## Propósito

Este paquete unifica la configuración compartida de ESLint utilizada en todos los proyectos de TanStack. Está diseñado para ser independiente del marco de trabajo (framework-agnostic) y no incluye ningún plugin específico para un marco en particular.

## Configuración

### package.json

- Asegúrese de tener ESLint v9+ instalado

### eslint.config.js

```js
import { tanstackConfig } from '@tanstack/eslint-config'
// O
import { tanstackConfig } from '@tanstack/config/eslint'

export default [
  ...tanstackConfig,
  {
    // Las reglas personalizadas van aquí
  },
]
```

## Plugins

- [@eslint/js](https://github.com/eslint/eslint) - Las reglas principales de ESLint
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) - Habilita soporte para TypeScript
- [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x) - Lint para importaciones y exportaciones
- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n) - Reglas útiles para Node.js

## Reglas

Puede inspeccionar las reglas habilitadas ejecutando `pnpm dlx @eslint/config-inspector` o consultando el código fuente [aquí](https://github.com/TanStack/config/tree/main/packages/eslint-config). Cada regla incluye un comentario que explica por qué está incluida en la configuración compartida.
