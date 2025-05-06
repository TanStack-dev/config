---
source-updated-at: '2024-07-11T14:20:05.000Z'
translation-updated-at: '2025-05-06T20:28:15.855Z'
id: dependencies
title: Dependencies
---
我们使用 3 个独立工具来管理依赖项，避免 `node_modules` 目录不必要的膨胀。

### Sherif

- Sherif 确保整个 monorepo 中对某个依赖项的所有引用都使用相同版本
- 这有助于避免 pnpm 解析问题，例如因安装 2 个以上不兼容版本的相同依赖而导致的类型冲突

### Knip

- Knip 能够检测 `package.json` 文件中未使用的依赖项
- 这可以减少开发者不必要安装的包数量

### Renovate

- Renovate 是在 GitHub 上运行的机器人，用于扫描过时或不安全的依赖项
- 通过自动提交 PR 来减轻维护者的负担
