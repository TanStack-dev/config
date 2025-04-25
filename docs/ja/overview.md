---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T17:03:02.498Z'
id: overview
title: 概要
---
# 概要

TanStack Configを使用すると、複雑な設定を提供することなく、パッケージの公開、更新、およびメンテナンスを行うことができます。

## 必要な前提条件

このパッケージを使用するには、以下のツールが必要です:

- [Node.js v18.17+](https://nodejs.org/en/download/current/)
- [Git CLI](https://git-scm.com/downloads)
- [GitHub CLI](https://cli.github.com/) (GitHub Actionsにはプリインストールされています)
- [pnpm v8+](https://pnpm.io/)

> pnpmはTanStack Configで唯一サポートされているパッケージマネージャーです。

## インストール

パッケージをインストールするには、以下のコマンドを実行してください:

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

## ユーティリティ

- [ESLint](./eslint.md)
- [Publish](./publish.md)
- [Vite](./vite.md)

## 規約

- [CI/CD](./ci-cd.md)
- [Dependencies](./dependencies.md)
- [Package Structure](./package-structure.md)
