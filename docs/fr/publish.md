---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T17:55:19.422Z'
id: publish
title: Publier
---
## Utilisation

Pour utiliser TanStack Config de manière programmatique, vous pouvez importer la fonction `publish` :

```ts
import { publish } from '@tanstack/config/publish'
// OU
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
    console.log('Paquets publiés avec succès !')
  })
  .catch(console.error)
```

> L'utilisation programmatique est uniquement disponible pour les paquets ESM. Pour la prendre en charge, vous devez avoir :
>
> ```json
> {
>   "type": "module"
> }
> ```
>
> dans votre fichier `package.json` et utiliser `import` au lieu de `require`.
