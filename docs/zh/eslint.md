---
source-updated-at: '2025-04-24T23:44:28.000Z'
translation-updated-at: '2025-04-24T23:51:33.971Z'
id: eslint
title: ESLint
---
## 目的

该包统一了所有 TanStack 项目中使用的共享 ESLint 配置。它被设计为框架无关，不包含任何框架特定的插件。

## 设置

### package.json

- 确保已安装 ESLint v9+

### eslint.config.js

```js
import { tanstackConfig } from '@tanstack/eslint-config'
// 或
import { tanstackConfig } from '@tanstack/config/eslint'

export default [
  ...tanstackConfig,
  {
    // 自定义规则写在此处
  },
]
```

## 插件

- [@eslint/js](https://github.com/eslint/eslint) - ESLint 核心规则
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) - 提供 TypeScript 支持
- [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x) - 对导入和导出进行代码检查
- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n) - 适用于 Node.js 的实用规则

## 规则

您可以通过运行 `pnpm dlx @eslint/config-inspector` 或浏览[源代码](https://github.com/TanStack/config/tree/main/packages/eslint-config)来查看启用的规则。每条规则都附有注释说明为何被包含在共享配置中。
