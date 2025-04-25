---
source-updated-at: '2025-04-25T03:58:40.000Z'
translation-updated-at: '2025-04-25T04:02:50.717Z'
id: overview
title: 概述
---
TanStack Config 讓您能夠發布、更新及維護套件，無需提供複雜的設定。

## 必要前置條件

使用此套件需要以下工具：

- [Node.js v18.17+](https://nodejs.org/en/download/current/)
- [Git CLI](https://git-scm.com/downloads)
- [GitHub CLI](https://cli.github.com/) (GitHub Actions 上已預先安裝)
- [pnpm v8+](https://pnpm.io/)

> pnpm 是 TanStack Config 唯一支援的套件管理工具。

## 安裝

執行以下指令以安裝套件：

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

## 工具

- [ESLint](./eslint.md)
- [Publish](./publish.md)
- [Vite](./vite.md)

## 慣例

- [CI/CD](./ci-cd.md)
- [相依性](./dependencies.md)
- [套件結構](./package-structure.md)
