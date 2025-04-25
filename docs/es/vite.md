---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T19:07:35.338Z'
id: vite
title: Vite
---
La configuración de compilación de Vite es el resultado de varios intentos para publicar de manera dual ESM y CJS en proyectos de TanStack, manteniendo la compatibilidad con todas las opciones de resolución de módulos de Typescript.

## ¿Necesito esto?

Los Módulos de ECMAScript (ESM) son el estándar para escribir módulos en JavaScript. Sin embargo, debido a la dependencia histórica de CommonJS (CJS), muchas herramientas y proyectos del ecosistema inicialmente eran incompatibles con ESM. Cada vez es más raro que este sea el caso, y le recomendaría que considere si es realmente necesario distribuir código CJS. Sindre Sorhus tiene un buen resumen sobre este tema [aquí](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

## Configuración

La configuración de compilación es bastante particular, ya que está diseñada para funcionar con nuestras bibliotecas internas. Si sigue las instrucciones a continuación, ¡_podría_ funcionar también para su biblioteca!

### package.json

- Asegúrese de que `"type": "module"` esté configurado.
- Asegúrese de tener [Vite](https://www.npmjs.com/package/vite) instalado. También se recomienda instalar [Publint](https://www.npmjs.com/package/publint).
- Cambie su script de compilación a `"build": "vite build && publint --strict"`.
- Asegúrese de tener un campo `"exports"`. Nosotros usamos este, pero usted podría tener requisitos diferentes:

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

- Asegúrese de que su campo `"include"` incluya `"vite.config.ts"`.
- Configure `"moduleResolution"` como `"bundler"`.

### vite.config.ts

- Importe `mergeConfig` y `tanstackViteConfig`.
- Combine su configuración personalizada primero, seguida de `tanstackViteConfig`.
- Evite modificar `build` en su configuración personalizada.
- Consulte el siguiente ejemplo:

```ts
import { defineConfig, mergeConfig } from 'vite'

import { tanstackViteConfig } from '@tanstack/config/vite'
// O
import { tanstackViteConfig } from '@tanstack/vite-config'

const config = defineConfig({
  // Plugins del framework, configuración de vitest, etc.
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

Si bien esta configuración _funcionará_ con la mayoría de los frameworks que tienen un adaptador de Vite, no significa que _deba_ usarla para todos, ya que muchos tienen sus propias herramientas de compilación optimizadas para su ecosistema. Cuando exista una herramienta de compilación específica para un framework, esta debe ser preferida.

| Framework | Recomendación                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------- |
| Angular   | [ng-packagr](https://www.npmjs.com/package/ng-packagr) (herramienta oficial)                      |
| React     | [@tanstack/config](https://www.npmjs.com/package/@tanstack/config) (solo si necesita dual ESM/CJS) |
| Solid     | [tsc](https://www.npmjs.com/package/typescript) (preserva JSX, necesario para SSR)                |
| Svelte    | [@sveltejs/package](https://www.npmjs.com/package/@sveltejs/package) (herramienta oficial)        |
| Vue       | [@tanstack/config](https://www.npmjs.com/package/@tanstack/config) (solo si necesita dual ESM/CJS) |
