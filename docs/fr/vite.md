---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T17:54:50.802Z'
id: vite
title: Vite
---
La configuration de build Vite est le résultat de plusieurs tentatives pour publier à la fois en ESM et CJS pour les projets TanStack, tout en préservant la compatibilité avec toutes les options de résolution de modules Typescript.

## Ai-je besoin de cela ?

Les modules ESM (ES Modules) sont la norme pour écrire des modules JavaScript. Cependant, en raison de la dépendance historique à CommonJS (CJS), de nombreux outils et projets de l'écosystème étaient initialement incompatibles avec ESM. Il devient extrêmement rare que ce soit encore le cas, et je vous encourage à considérer s'il est vraiment nécessaire de distribuer du code CJS. Sindre Sorhus propose un bon résumé sur ce sujet [ici](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

## Configuration

La configuration de build est assez rigide, car elle est conçue pour fonctionner avec nos bibliothèques internes. Si vous suivez les instructions ci-dessous, cela _pourrait_ fonctionner pour votre bibliothèque aussi !

### package.json

- Assurez-vous que `"type": "module"` est défini.
- Assurez-vous d'avoir [Vite](https://www.npmjs.com/package/vite) installé. Il est également recommandé d'installer [Publint](https://www.npmjs.com/package/publint).
- Modifiez votre script de build pour qu'il soit `"build": "vite build && publint --strict"`.
- Assurez-vous d'avoir un champ `"exports"`. Nous utilisons ceci, mais vous pourriez avoir des besoins différents :

```json
{
  "exports": {
    ".": {
      "import": {
        "types": "./dist/esm/index.d.ts",
        "default": "./dist/esm/index.js"
      },
      "require": {
        "types": "./dist/cjs/index.d.cts",
        "default": "./dist/cjs/index.cjs"
      }
    },
    "./package.json": "./package.json"
  }
}
```

### tsconfig.json

- Assurez-vous que votre champ `"include"` inclut `"vite.config.ts"`.
- Définissez `"moduleResolution"` sur `"bundler"`.

### vite.config.ts

- Importez `mergeConfig` et `tanstackViteConfig`.
- Fusionnez d'abord votre configuration personnalisée, suivie de `tanstackViteConfig`.
- Évitez de modifier `build` dans votre configuration personnalisée.
- Voir un exemple ci-dessous :

```ts
import { defineConfig, mergeConfig } from 'vite'

import { tanstackViteConfig } from '@tanstack/config/vite'
// OU
import { tanstackViteConfig } from '@tanstack/vite-config'

const config = defineConfig({
  // Plugins de framework, configuration de vitest, etc.
})

export default mergeConfig(
  config,
  tanstackViteConfig({
    entry: './src/index.ts',
    srcDir: './src',
  }),
)
```

## Frameworks

Bien que cette configuration _fonctionnera_ avec la plupart des frameworks disposant d'un adaptateur Vite, cela ne signifie pas que vous _devriez_ l'utiliser pour tous les frameworks, car beaucoup ont leurs propres outils de build optimisés pour leur écosystème. Lorsqu'un outil de build spécifique à un framework existe, celui-ci doit être préféré.

| Framework | Recommandation                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------- |
| Angular   | [ng-packagr](https://www.npmjs.com/package/ng-packagr) (outil officiel)                             |
| React     | [@tanstack/config](https://www.npmjs.com/package/@tanstack/config) (uniquement si vous avez besoin de dual ESM/CJS) |
| Solid     | [tsc](https://www.npmjs.com/package/typescript) (préserve JSX, nécessaire pour SSR)                 |
| Svelte    | [@sveltejs/package](https://www.npmjs.com/package/@sveltejs/package) (outil officiel)               |
| Vue       | [@tanstack/config](https://www.npmjs.com/package/@tanstack/config) (uniquement si vous avez besoin de dual ESM/CJS) |
