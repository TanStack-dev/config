---
source-updated-at: '2025-04-25T03:58:40.000Z'
translation-updated-at: '2025-04-25T04:02:01.858Z'
id: publish
title: 发布
---
## 用法

要以编程方式使用 TanStack 配置 (TanStack Config)，可以导入 `publish` 函数：

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
    console.log('包发布成功！')
  })
  .catch(console.error)
```

> 此编程用法仅适用于 ESM 包 (ESM packages)。要支持此功能，必须在你的 `package.json` 文件中包含：
>
> ```json
> {
>   "type": "module"
> }
> ```
>
> 并使用 `import` 而非 `require`。
