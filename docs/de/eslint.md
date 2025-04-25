---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T17:53:04.615Z'
id: eslint
title: ESLint
---
## Zweck

Dieses Paket vereinheitlicht die gemeinsam genutzte ESLint-Konfiguration (ESLint config), die in allen TanStack-Projekten verwendet wird. Es ist framework-agnostisch (framework-agnostic) entworfen und enthält keine framework-spezifischen Plugins.

## Einrichtung

### package.json

- Stellen Sie sicher, dass ESLint v9+ installiert ist

### eslint.config.js

```js
import { tanstackConfig } from '@tanstack/eslint-config'
// ODER
import { tanstackConfig } from '@tanstack/config/eslint'

export default [
  ...tanstackConfig,
  {
    // Benutzerdefinierte Regeln kommen hierhin
  },
]
```

## Plugins

- [@eslint/js](https://github.com/eslint/eslint) - Die grundlegenden ESLint-Regeln (core ESLint rules)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) - Ermöglicht TypeScript-Unterstützung (TypeScript support)
- [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x) - Überprüft Importe und Exporte (lints imports and exports)
- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n) - Nützliche Regeln für Node.js

## Regeln

Sie können die aktivierten Regeln überprüfen, indem Sie `pnpm dlx @eslint/config-inspector` ausführen oder indem Sie den Quellcode [hier](https://github.com/TanStack/config/tree/main/packages/eslint-config) durchsuchen. Jede Regel enthält einen Kommentar, der erklärt, warum sie in der gemeinsamen Konfiguration (shared config) enthalten ist.
