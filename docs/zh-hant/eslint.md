---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T04:02:53.216Z'
id: eslint
title: ESLint
---
## 目的

此套件統一了所有 TanStack 專案中共享的 ESLint 配置。它被設計為與框架無關，不包含任何特定框架的外掛 (plugins)。

## 設定

### package.json

- 確保已安裝 ESLint v9 以上版本

### eslint.config.js

```js
import { tanstackConfig } from '@tanstack/eslint-config'
// OR
import { tanstackConfig } from '@tanstack/config/eslint'

export default [
  ...tanstackConfig,
  {
    // 自訂規則放在這裡
  },
]
```

## 外掛 (Plugins)

- [@eslint/js](https://github.com/eslint/eslint) - ESLint 核心規則
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) - 啟用 TypeScript 支援
- [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x) - 檢查匯入 (imports) 與匯出 (exports)
- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n) - 適用於 Node.js 的實用規則

## 規則

您可以透過執行 `pnpm dlx @eslint/config-inspector` 來檢視已啟用的規則，或瀏覽原始碼 [這裡](https://github.com/TanStack/config/tree/main/packages/eslint-config)。每個規則都附有註解，說明為何被納入共享配置中。
