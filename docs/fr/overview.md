---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T17:53:55.298Z'
id: overview
title: Vue d'ensemble
---
TanStack Config vous permet de publier, mettre à jour et maintenir vos paquets sans avoir à fournir une configuration complexe.

## Prérequis obligatoires

Les outils suivants sont nécessaires pour utiliser ce paquet :

- [Node.js v18.17+](https://nodejs.org/en/download/current/)
- [Git CLI](https://git-scm.com/downloads)
- [GitHub CLI](https://cli.github.com/) (préinstallé sur GitHub Actions)
- [pnpm v8+](https://pnpm.io/)

> pnpm est le seul gestionnaire de paquets pris en charge pour TanStack Config.

## Installation

Pour installer le paquet, exécutez la commande suivante :

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

## Utilitaires

- [ESLint](./eslint.md)
- [Publish](./publish.md)
- [Vite](./vite.md)

## Conventions

- [CI/CD](./ci-cd.md)
- [Dépendances](./dependencies.md)
- [Structure des paquets](./package-structure.md)
