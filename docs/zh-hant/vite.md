---
source-updated-at: '2025-04-25T03:58:40.000Z'
translation-updated-at: '2025-04-25T04:03:16.540Z'
id: vite
title: Vite
---
Vite 建置設定是經過多次嘗試後，針對 TanStack 專案同時發布 ESM 和 CJS 的解決方案，同時保持與所有 TypeScript 模組解析選項的相容性。

## 我需要這個嗎？

ES 模組 (ESM) 是撰寫 JavaScript 模組的標準。然而，由於歷史原因對 CommonJS (CJS) 的依賴，許多生態系統工具和專案最初與 ESM 不相容。這種情況已變得極為罕見，我建議您考慮是否真的需要分發 CJS 程式碼。Sindre Sorhus 對此問題有很好的總結 [此處](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)。

## 設定

此建置配置相當具有特定性，因為它是為我們的內部函式庫設計的。如果您遵循以下說明，它 _可能_ 也適用於您的函式庫！

### package.json

- 確保設定 `"type": "module"`。
- 確保已安裝 [Vite](https://www.npmjs.com/package/vite)。建議也安裝 [Publint](https://www.npmjs.com/package/publint)。
- 將建置指令改為 `"build": "vite build && publint --strict"`。
- 確保有 `"exports"` 欄位。我們使用以下設定，但您可能有不同需求：

```json
{
  "exports": {
    ".": {
      "import": {
        "types": "./dist/esm/index.d.ts",
        "default": "./dist/esm/index.js"
      },
      "require": {
        "types": "./dist/cjs/index.d.cts",
        "default": "./dist/cjs/index.cjs"
      }
    },
    "./package.json": "./package.json"
  }
}
```

### tsconfig.json

- 確保 `"include"` 欄位包含 `"vite.config.ts"`。
- 將 `"moduleResolution"` 設為 `"bundler"`。

### vite.config.ts

- 匯入 `mergeConfig` 和 `tanstackViteConfig`。
- 先合併您的自訂配置，再合併 `tanstackViteConfig`。
- 請避免在自訂配置中修改 `build`。
- 參考以下範例：

```ts
import { defineConfig, mergeConfig } from 'vite'

import { tanstackViteConfig } from '@tanstack/config/vite'
// 或
import { tanstackViteConfig } from '@tanstack/vite-config'

const config = defineConfig({
  // 框架插件、vitest 設定等
})

export default mergeConfig(
  config,
  tanstackViteConfig({
    entry: './src/index.ts',
    srcDir: './src',
  }),
)
```

## 框架

雖然此配置 _能_ 與大多數具有 Vite 轉接器的框架一起使用，但這並不意味著您 _應該_ 將其用於所有框架，因為許多框架有自己的建置工具，這些工具針對其生態系統進行了優化。當存在框架特定的建置工具時，應優先使用這些工具。

| 框架    | 建議                                                                                     |
| ------- | ---------------------------------------------------------------------------------------- |
| Angular | [ng-packagr](https://www.npmjs.com/package/ng-packagr) (官方工具)                         |
| React   | [@tanstack/config](https://www.npmjs.com/package/@tanstack/config) (僅需雙重 ESM/CJS 時) |
| Solid   | [tsc](https://www.npmjs.com/package/typescript) (保留 JSX，SSR 必需)                     |
| Svelte  | [@sveltejs/package](https://www.npmjs.com/package/@sveltejs/package) (官方工具)          |
| Vue     | [@tanstack/config](https://www.npmjs.com/package/@tanstack/config) (僅需雙重 ESM/CJS 時) |
