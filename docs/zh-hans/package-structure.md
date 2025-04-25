---
source-updated-at: '2025-04-25T03:58:40.000Z'
translation-updated-at: '2025-04-25T04:02:06.658Z'
id: package-structure
title: 包结构
---
以下结构确保包在我们的 monorepo/Nx 工作流中达到最佳运行效果。

### `./package.json`

- 所有 TanStack 项目都设置 `"type": "module"` 以将 `.js` 文件的默认解析方式设为 ESM；这对构建 CJS 格式无影响
- 必须包含 `"exports"` 字段
- 出于历史兼容性考虑，还应保留 `"main"`、`"module"` 和 `"types"` 字段
- 所有包都包含以下由 Nx 缓存的脚本：`"test:eslint"`、`"test:types"`、`"test:lib"`、`"build"`、`"test:build"`

### `./tsconfig.json`

- 继承根级 tsconfig（例如 `"extends": "../../tsconfig.json"`）
- 在此添加框架特定的配置选项和包含的文件

### `./vite.config.ts`

- 包含 Vitest 的配置，若使用 [@tanstack/config/vite](./vite.md) 则同时包含 Vite 配置

### `./src`

- 该目录应仅包含需要构建并分发给用户的代码
- 测试文件不应放在此目录，它们会增加分发代码体积，并可能意外使 Nx 缓存失效

### `./tests`

- 该目录应包含所有测试文件
- 还应包含该框架所需的所有测试初始化文件
