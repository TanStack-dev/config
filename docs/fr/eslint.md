---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T17:54:11.486Z'
id: eslint
title: ESLint
---
## Objectif

Ce package unifie la configuration partagée d'ESLint utilisée dans tous les projets TanStack. Il est conçu pour être indépendant du framework et n'inclut aucun plugin spécifique à un framework.

## Configuration

### package.json

- Assurez-vous d'avoir ESLint v9+ installé

### eslint.config.js

```js
import { tanstackConfig } from '@tanstack/eslint-config'
// OU
import { tanstackConfig } from '@tanstack/config/eslint'

export default [
  ...tanstackConfig,
  {
    // Les règles personnalisées vont ici
  },
]
```

## Plugins

- [@eslint/js](https://github.com/eslint/eslint) - Les règles principales d'ESLint
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) - Active le support de TypeScript
- [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x) - Vérifie les imports et exports
- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n) - Règles utiles pour Node.js

## Règles

Vous pouvez inspecter les règles activées en exécutant `pnpm dlx @eslint/config-inspector`, ou en parcourant le code source [ici](https://github.com/TanStack/config/tree/main/packages/eslint-config). Chaque règle est accompagnée d'un commentaire expliquant pourquoi elle est incluse dans la configuration partagée.
