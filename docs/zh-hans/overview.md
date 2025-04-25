---
source-updated-at: '2025-04-25T03:58:40.000Z'
translation-updated-at: '2025-04-25T04:02:05.214Z'
id: overview
title: 概述
---
# 概述

TanStack Config 让您能够发布、更新和维护您的软件包，而无需提供复杂的配置。

## 必要前提条件

使用此软件包需要以下工具：

- [Node.js v18.17+](https://nodejs.org/en/download/current/)
- [Git CLI](https://git-scm.com/downloads)
- [GitHub CLI](https://cli.github.com/) (在 GitHub Actions 中预装)
- [pnpm v8+](https://pnpm.io/)

> pnpm 是 TanStack Config 唯一支持的包管理器。

## 安装

要安装此软件包，请运行以下命令：

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
- [发布](./publish.md)
- [Vite](./vite.md)

## 约定规范

- [持续集成/持续交付 (CI/CD)](./ci-cd.md)
- [依赖项](./dependencies.md)
- [包结构](./package-structure.md)
