---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T17:53:11.333Z'
id: vite
title: Vite
---
Die Vite-Build-Konfiguration ist das Ergebnis mehrerer Versuche, ESM und CJS für TanStack-Projekte parallel zu veröffentlichen, während die Kompatibilität mit allen TypeScript-Modulauflösungsoptionen erhalten bleibt.

## Brauche ich das?

ES Modules (ESM) ist der Standard für das Schreiben von JavaScript-Modulen. Aufgrund der historischen Abhängigkeit von CommonJS (CJS) waren jedoch viele Ökosystem-Tools und -Projekte anfänglich nicht mit ESM kompatibel. Es wird immer seltener, dass dies der Fall ist, und ich würde Sie dazu ermutigen, zu überlegen, ob es überhaupt notwendig ist, CJS-Code zu verteilen. Sindre Sorhus hat eine gute Zusammenfassung zu diesem Thema [hier](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

## Einrichtung

Die Build-Konfiguration ist recht eigenwillig, da sie für unsere internen Bibliotheken entwickelt wurde. Wenn Sie die folgenden Anweisungen befolgen, könnte sie _möglicherweise_ auch für Ihre Bibliothek funktionieren!

### package.json

- Stellen Sie sicher, dass `"type": "module"` gesetzt ist.
- Stellen Sie sicher, dass [Vite](https://www.npmjs.com/package/vite) installiert ist. Die Installation von [Publint](https://www.npmjs.com/package/publint) wird ebenfalls empfohlen.
- Ändern Sie Ihr Build-Skript zu `"build": "vite build && publint --strict"`
- Stellen Sie sicher, dass Sie ein `"exports"`-Feld haben. Wir verwenden dies, aber Sie könnten andere Anforderungen haben:

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

- Stellen Sie sicher, dass Ihr `"include"`-Feld `"vite.config.ts"` enthält.
- Setzen Sie `"moduleResolution"` auf `"bundler"`.

### vite.config.ts

- Importieren Sie `mergeConfig` und `tanstackViteConfig`.
- Führen Sie zuerst Ihre benutzerdefinierte Konfiguration zusammen, gefolgt von `tanstackViteConfig`.
- Vermeiden Sie bitte Änderungen an `build` in Ihrer benutzerdefinierten Konfiguration.
- Siehe ein Beispiel unten:

```ts
import { defineConfig, mergeConfig } from 'vite'

import { tanstackViteConfig } from '@tanstack/config/vite'
// ODER
import { tanstackViteConfig } from '@tanstack/vite-config'

const config = defineConfig({
  // Framework-Plugins, Vitest-Konfiguration, etc.
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

Während diese Konfiguration _mit_ den meisten Frameworks mit einem Vite-Adapter funktioniert, bedeutet das nicht, dass Sie sie _für_ alle Frameworks verwenden sollten, da viele ihre eigenen Build-Tools haben, die für ihr Ökosystem optimiert sind. Wenn ein Framework-spezifisches Build-Tool existiert, sollte dieses bevorzugt werden.

| Framework | Empfehlung                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------- |
| Angular   | [ng-packagr](https://www.npmjs.com/package/ng-packagr) (offizielles Tool)                             |
| React     | [@tanstack/config](https://www.npmjs.com/package/@tanstack/config) (nur bei Bedarf für duales ESM/CJS) |
| Solid     | [tsc](https://www.npmjs.com/package/typescript) (erhält JSX, notwendig für SSR)                 |
| Svelte    | [@sveltejs/package](https://www.npmjs.com/package/@sveltejs/package) (offizielles Tool)               |
| Vue       | [@tanstack/config](https://www.npmjs.com/package/@tanstack/config) (nur bei Bedarf für duales ESM/CJS) |
