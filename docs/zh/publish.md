---
source-updated-at: '2025-04-25T03:31:36.000Z'
translation-updated-at: '2025-04-25T03:33:03.181Z'
id: publish
title: 发布
---
## 使用方式

要以编程方式使用 TanStack Config，你可以导入 `publish` 函数：

```ts
import { publish } from '@tanstack/config/publish'
// 或者
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

> 编程式用法仅适用于 ESM 模块。为了支持此功能，你需要在 `package.json` 文件中包含：
>
> ```json
> {
>   "type": "module"
> }
> ```
>
> 并使用 `import` 而非 `require`。
