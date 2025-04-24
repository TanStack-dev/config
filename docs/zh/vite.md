---
source-updated-at: '2025-04-24T23:44:28.000Z'
translation-updated-at: '2025-04-24T23:51:54.035Z'
id: vite
title: Vite
---
Vite 构建配置是多次尝试为 TanStack 项目同时发布 ESM 和 CJS 的成果，同时保留了与所有 Typescript 模块解析选项的兼容性。

## 我需要这个吗？

ES 模块 (ESM) 是编写 JavaScript 模块的标准。然而，由于历史上对 CommonJS (CJS) 的依赖，许多生态系统工具和项目最初与 ESM 不兼容。这种情况现在已变得极为罕见，我建议您考虑是否真的需要分发 CJS 代码。Sindre Sorhus 对此问题有一个很好的总结 [在此](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)。

## 配置

该构建配置非常固执己见，因为它是为我们的内部库设计的。如果您按照以下说明操作，它 _可能_ 也适用于您的库！

### package.json

- 确保设置了 `"type": "module"`。
- 确保已安装 [Vite](https://www.npmjs.com/package/vite)。也建议安装 [Publint](https://www.npmjs.com/package/publint)。
- 将构建脚本改为 `"build": "vite build && publint --strict"`。
- 确保有一个 `"exports"` 字段。我们使用以下配置，但您可能有不同的需求：

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

- 确保 `"include"` 字段包含 `"vite.config.ts"`。
- 将 `"moduleResolution"` 设置为 `"bundler"`。

### vite.config.ts

- 导入 `mergeConfig` 和 `tanstackViteConfig`。
- 先合并您的自定义配置，再合并 `tanstackViteConfig`。
- 请避免在自定义配置中修改 `build`。
- 参考以下示例：

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

## 框架

虽然此配置 _可以_ 与大多数带有 Vite 适配器的框架一起使用，但这并不意味着您 _应该_ 在所有框架中使用它，因为许多框架有自己的构建工具，这些工具针对其生态系统进行了优化。当存在特定于框架的构建工具时，应优先使用它们。

| 框架    | 推荐方案                                                                                     |
| ------- | ------------------------------------------------------------------------------------------ |
| Angular | [ng-packagr](https://www.npmjs.com/package/ng-packagr) (官方工具)                             |
| React   | [@tanstack/config](https://www.npmjs.com/package/@tanstack/config) (仅在需要双 ESM/CJS 时使用) |
| Solid   | [tsc](https://www.npmjs.com/package/typescript) (保留 JSX，SSR 必需)                          |
| Svelte  | [@sveltejs/package](https://www.npmjs.com/package/@sveltejs/package) (官方工具)               |
| Vue     | [@tanstack/config](https://www.npmjs.com/package/@tanstack/config) (仅在需要双 ESM/CJS 时使用) |
