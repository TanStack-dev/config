---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T17:55:40.590Z'
id: overview
title: Обзор
---
# Обзор

TanStack Config позволяет публиковать, обновлять и поддерживать ваши пакеты без необходимости предоставлять сложную конфигурацию.

## Необходимые условия

Для использования этого пакета требуются следующие инструменты:

- [Node.js v18.17+](https://nodejs.org/en/download/current/)
- [Git CLI](https://git-scm.com/downloads)
- [GitHub CLI](https://cli.github.com/) (предустановлен на GitHub Actions)
- [pnpm v8+](https://pnpm.io/)

> pnpm — единственный поддерживаемый менеджер пакетов для TanStack Config.

## Установка

Чтобы установить пакет, выполните следующую команду:

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

## Утилиты

- [ESLint](./eslint.md)
- [Publish](./publish.md)
- [Vite](./vite.md)

## Соглашения

- [CI/CD](./ci-cd.md)
- [Зависимости](./dependencies.md)
- [Структура пакета](./package-structure.md)
