---
source-updated-at: '2025-04-25T03:31:36.000Z'
translation-updated-at: '2025-04-25T03:32:57.109Z'
id: package-structure
title: 包结构
---
以下结构确保包在我们的 monorepo/Nx 工作流中能最佳运行。

### `./package.json`

- 所有 TanStack 项目都设置 `"type": "module"` 以将 `.js` 文件的默认解析方式设为 ESM；这对构建 CJS 无任何影响
- 包含 `"exports"` 字段也至关重要
- 出于历史兼容性考虑，还应包含 `"main"`、`"module"` 和 `"types"` 字段
- 所有包都包含以下由 Nx 缓存的脚本：`"test:eslint"`、`"test:types"`、`"test:lib"`、`"build"`、`"test:build"`

### `./tsconfig.json`

- 继承根级 tsconfig（例如 `"extends": "../../tsconfig.json"`）
- 在此添加框架特定的选项和包含的文件

### `./vite.config.ts`

- 包含 Vitest 的配置，若使用 [@tanstack/config/vite](./vite.md) 则同时包含 Vite 的配置

### `./src`

- 此文件夹应仅包含会被构建并分发给用户的代码
- 测试文件不应放在此文件夹中，因为它们会增加分发代码的体积，并可能意外使 Nx 缓存失效

### `./tests`

- 此文件夹应包含所有测试文件
- 还应包含该框架所需的任何测试设置文件
