---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T17:02:59.108Z'
id: publish
title: 公開
---
## 使用方法

TanStack Config をプログラムで使用するには、`publish` 関数をインポートします:

```ts
import { publish } from '@tanstack/config/publish'
// または
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
    console.log('パッケージの公開に成功しました！')
  })
  .catch(console.error)
```

> プログラムでの使用は ESM (ECMAScript Modules) パッケージのみで利用可能です。これをサポートするには、以下の設定が必要です:
>
> ```json
> {
>   "type": "module"
> }
> ```
>
> この設定を `package.json` ファイルに追加し、`require` の代わりに `import` を使用してください。
