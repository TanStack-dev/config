---
source-updated-at: '2025-04-25T03:58:40.000Z'
translation-updated-at: '2025-04-25T04:02:54.025Z'
id: package-structure
title: 套件結構
---
以下結構確保套件能在我們的 monorepo/Nx 工作流程中最佳運作。

### `./package.json`

- 所有 TanStack 專案都設有 `"type": "module"` 以將 `.js` 檔案的預設解析設定為 ESM；這對建置 CJS 沒有任何影響
- 同時必須包含 `"exports"` 欄位
- 基於歷史相容性，也應包含 `"main"`、`"module"` 和 `"types"` 欄位
- 所有套件都包含以下由 Nx 快取的腳本：`"test:eslint"`、`"test:types"`、`"test:lib"`、`"build"`、`"test:build"`

### `./tsconfig.json`

- 繼承根層級的 tsconfig（例如 `"extends": "../../tsconfig.json"`）
- 在此添加任何框架專用的選項和包含的檔案

### `./vite.config.ts`

- 包含 Vitest 的設定，若使用 [@tanstack/config/vite](./vite.md) 則同時包含 Vite 的設定

### `./src`

- 此資料夾應僅包含會建置並發佈給使用者的程式碼
- 測試檔案不應放在此處，因為它們會增加發佈程式碼的體積，並可能意外使 Nx 快取失效

### `./tests`

- 此資料夾應包含所有測試檔案
- 同時應包含該框架所需的任何測試設定檔案
