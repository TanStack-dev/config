---
source-updated-at: '2025-04-24T23:44:28.000Z'
translation-updated-at: '2025-04-24T23:51:31.572Z'
id: publish
title: 发布
---
## 使用方法

要以编程方式使用 TanStack Config (配置工具)，可以导入 `publish` 函数：

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

> 此编程式用法仅适用于 ESM (ECMAScript Modules) 格式的包。要支持此功能，您需要在：
>
> ```json
> {
>   "type": "module"
> }
> ```
>
> 在您的 `package.json` 文件中添加以上配置，并使用 `import` 而非 `require`。
