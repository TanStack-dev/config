---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T19:07:10.207Z'
id: publish
title: Publicar
---
## Uso

Para usar la Configuración de TanStack (TanStack Config) de manera programática, puede importar la función `publish`:

```ts
import { publish } from '@tanstack/config/publish'
// O
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
    console.log('¡Paquetes publicados exitosamente!')
  })
  .catch(console.error)
```

> El uso programático solo está disponible para paquetes ESM. Para admitir esto, debe tener:
>
> ```json
> {
>   "type": "module"
> }
> ```
>
> en su archivo `package.json` y usar `import` en lugar de `require`.
