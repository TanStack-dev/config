---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T17:53:34.933Z'
id: publish
title: Veröffentlichen
---
## Verwendung

Um die TanStack Config programmatisch zu nutzen, können Sie die Funktion `publish` importieren:

```ts
import { publish } from '@tanstack/config/publish'
// ODER
import { publish } from '@tanstack/publish-config'

publish({
  branchConfigs: configOpts.branchConfigs,
  packages: configOpts.packages,
  rootDir: configOpts.rootDir,
  branch: process.env.BRANCH,
  tag: process.env.TAG,
  ghToken: process.env.GH_TOKEN,
})
  .then(() => {
    console.log('Pakete erfolgreich veröffentlicht!')
  })
  .catch(console.error)
```

> Die programmatische Nutzung ist nur für ESM-Pakete (ES Modules) verfügbar. Um dies zu unterstützen, müssen Sie:
>
> ```json
> {
>   "type": "module"
> }
> ```
>
> in Ihrer `package.json`-Datei angeben und `import` anstelle von `require` verwenden.
