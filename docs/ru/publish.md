---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T17:56:50.073Z'
id: publish
title: Публикация
---
## Использование

Для программного использования TanStack Config вы можете импортировать функцию `publish`:

```ts
import { publish } from '@tanstack/config/publish'
// ИЛИ
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
    console.log('Пакеты успешно опубликованы!')
  })
  .catch(console.error)
```

> Программное использование доступно только для пакетов ESM. Для поддержки этого необходимо добавить:
>
> ```json
> {
>   "type": "module"
> }
> ```
>
> в файл `package.json` и использовать `import` вместо `require`.
