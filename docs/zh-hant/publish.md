---
source-updated-at: '2025-04-25T03:58:40.000Z'
translation-updated-at: '2025-04-25T04:02:48.889Z'
id: publish
title: 發佈
---
## 使用方式

要以程式化的方式使用 TanStack Config (TanStack 配置)，你可以匯入 `publish` 函式：

```ts
import { publish } from '@tanstack/config/publish'
// 或
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
    console.log('Successfully published packages!')
  })
  .catch(console.error)
```

> 程式化使用方式僅適用於 ESM (ES 模組) 套件。要支援此功能，你必須在 `package.json` 檔案中包含：
>
> ```json
> {
>   "type": "module"
> }
> ```
>
> 並使用 `import` 而非 `require`。
