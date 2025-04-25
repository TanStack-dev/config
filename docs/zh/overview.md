---
source-updated-at: '2025-04-25T03:31:36.000Z'
translation-updated-at: '2025-04-25T03:33:25.086Z'
id: overview
title: 概述
---
TanStack Config 让您无需提供复杂配置即可发布、更新和维护您的包。

## 必备前提条件

使用此包需要以下工具：

- [Node.js v18.17+](https://nodejs.org/en/download/current/)
- [Git CLI](https://git-scm.com/downloads)
- [GitHub CLI](https://cli.github.com/) (在 GitHub Actions 中已预装)
- [pnpm v8+](https://pnpm.io/)

> pnpm 是 TanStack Config 唯一支持的包管理器。

## 安装

运行以下命令安装该包：

```bash
# 一体化安装
pnpm add -D @tanstack/config

# ESLint 配置
pnpm add -D @tanstack/eslint-config

# 发布配置
pnpm add -D @tanstack/publish-config

# Typedoc 配置
pnpm add -D @tanstack/typedoc-config

# Vite 配置
pnpm add -D @tanstack/vite-config
```

## 实用工具

- [ESLint](./eslint.md)
- [发布配置](./publish.md)
- [Vite 配置](./vite.md)

## 约定规范

- [持续集成/持续交付 (CI/CD)](./ci-cd.md)
- [依赖管理](./dependencies.md)
- [包结构](./package-structure.md)
