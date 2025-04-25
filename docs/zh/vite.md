---
source-updated-at: '2025-04-25T03:31:36.000Z'
translation-updated-at: '2025-04-25T03:33:45.106Z'
id: vite
title: Vite
---
Vite 构建配置是经过多次尝试后形成的解决方案，旨在为 TanStack 项目实现 ESM 和 CJS 双模式发布，同时保持与所有 TypeScript 模块解析选项的兼容性。

## 我需要这个吗？

ES 模块 (ESM) 是编写 JavaScript 模块的标准。但由于历史原因对 CommonJS (CJS) 的依赖，许多生态工具和项目最初无法兼容 ESM。如今这种情况已极为罕见，我建议您认真考虑是否真的需要分发 CJS 代码。Sindre Sorhus 对此问题有很好的总结 [here](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)。

## 配置

该构建配置具有较强的主观性，因其专为我们内部库设计。若遵循以下说明，它 _可能_ 也适用于您的库！

### package.json

- 确保设置 `"type": "module"`
- 确保已安装 [Vite](https://www.npmjs.com/package/vite)，同时推荐安装 [Publint](https://www.npmjs.com/package/publint)
- 将构建脚本改为 `"build": "vite build && publint --strict"`
- 确保包含 `"exports"` 字段。以下是我们使用的配置，您可能需要根据需求调整：

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

- 确保 `"include"` 字段包含 `"vite.config.ts"`
- 将 `"moduleResolution"` 设为 `"bundler"`

### vite.config.ts

- 导入 `mergeConfig` 和 `tanstackViteConfig`
- 先合并您的自定义配置，再合并 `tanstackViteConfig`
- 请避免在自定义配置中修改 `build` 选项
- 参考示例：

```ts
import { defineConfig, mergeConfig } from 'vite'

import { tanstackViteConfig } from '@tanstack/config/vite'
// 或
import { tanstackViteConfig } from '@tanstack/vite-config'

const config = defineConfig({
  // 框架插件、vitest 配置等
})

export default mergeConfig(
  config,
  tanstackViteConfig({
    entry: './src/index.ts',
    srcDir: './src',
  }),
)
```

## 框架支持

虽然此配置 _能_ 与大多数具有 Vite 适配器的框架协同工作，但并不意味着您 _应该_ 在所有框架中使用它，因为许多框架都有针对其生态优化的专属构建工具。当存在框架专用构建工具时，应优先使用它们。

| 框架    | 推荐方案                                                                                     |
| ------- | ------------------------------------------------------------------------------------------ |
| Angular | [ng-packagr](https://www.npmjs.com/package/ng-packagr) (官方工具)                           |
| React   | [@tanstack/config](https://www.npmjs.com/package/@tanstack/config) (仅需双模式 ESM/CJS 时)  |
| Solid   | [tsc](https://www.npmjs.com/package/typescript) (保留 JSX，服务端渲染 (SSR) 必需)           |
| Svelte  | [@sveltejs/package](https://www.npmjs.com/package/@sveltejs/package) (官方工具)             |
| Vue     | [@tanstack/config](https://www.npmjs.com/package/@tanstack/config) (仅需双模式 ESM/CJS 时)  |
