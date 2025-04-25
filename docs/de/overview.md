---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T17:52:47.503Z'
id: overview
title: Übersicht
---
# Übersicht

Mit TanStack Config können Sie Ihre Pakete veröffentlichen, aktualisieren und verwalten, ohne komplexe Konfigurationen bereitstellen zu müssen.

## Erforderliche Voraussetzungen

Die folgenden Tools sind erforderlich, um dieses Paket zu verwenden:

- [Node.js v18.17+](https://nodejs.org/en/download/current/)
- [Git CLI](https://git-scm.com/downloads)
- [GitHub CLI](https://cli.github.com/) (vorinstalliert auf GitHub Actions)
- [pnpm v8+](https://pnpm.io/)

> pnpm ist der einzige unterstützte Paketmanager für TanStack Config.

## Installation

Um das Paket zu installieren, führen Sie den folgenden Befehl aus:

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

## Hilfsprogramme

- [ESLint](./eslint.md)
- [Publish](./publish.md)
- [Vite](./vite.md)

## Konventionen

- [CI/CD](./ci-cd.md)
- [Abhängigkeiten](./dependencies.md)
- [Paketstruktur](./package-structure.md)
