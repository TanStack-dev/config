---
source-updated-at: '2025-04-24T23:44:28.000Z'
translation-updated-at: '2025-04-24T23:51:33.857Z'
id: overview
title: 概述
---
TanStack Config 让您能够发布、更新和维护您的软件包，而无需提供复杂的配置。

## 必备条件

使用该软件包需要以下工具：

- [Node.js v18.17+](https://nodejs.org/en/download/current/)
- [Git CLI](https://git-scm.com/downloads)
- [GitHub CLI](https://cli.github.com/) (在 GitHub Actions 中预安装)
- [pnpm v8+](https://pnpm.io/)

> pnpm 是 TanStack Config 唯一支持的包管理器。

## 安装

要安装该软件包，请运行以下命令：

```bash
# AIO
pnpm add -D @tanstack/config

# ESLint
pnpm add -D @tanstack/eslint-config

# Publish
pnpm add -D @tanstack/publish-config

# Typedoc
pnpm add -D @tanstack/typedoc-config

# Vite
pnpm add -D @tanstack/vite-config
```

## 实用工具

- [ESLint](./eslint.md)
- [Publish](./publish.md)
- [Vite](./vite.md)

## 约定规范

- [CI/CD](./ci-cd.md)
- [依赖项](./dependencies.md)
- [包结构](./package-structure.md)
