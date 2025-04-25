---
source-updated-at: '2024-07-19T09:06:46.000Z'
translation-updated-at: '2025-04-25T17:55:08.142Z'
id: package-structure
title: Structure de package
---
# Structure des paquets (Package Structure)

La structure suivante garantit que les paquets fonctionnent de manière optimale avec notre workflow monorepo/Nx.

### `./package.json`

- Tous les projets TanStack ont `"type": "module"` pour définir la résolution par défaut des fichiers `.js` en ESM ; cela n'a aucun impact sur la compilation en CJS
- Il est également essentiel d'avoir un champ `"exports"`
- Pour des raisons de compatibilité, vous devez aussi inclure les champs `"main"`, `"module"` et `"types"`
- Tous les paquets contiennent les scripts suivants qui sont mis en cache par Nx : `"test:eslint"`, `"test:types"`, `"test:lib"`, `"build"`, `"test:build"`

### `./tsconfig.json`

- Étend le tsconfig racine (par exemple `"extends": "../../tsconfig.json"`)
- Ajoutez ici toutes les options spécifiques au framework et les fichiers inclus

### `./vite.config.ts`

- Inclut la configuration pour Vitest, et pour Vite si [@tanstack/config/vite](./vite.md) est utilisé

### `./src`

- Ce dossier ne doit contenir que le code qui est compilé et livré aux utilisateurs
- Les tests ne doivent pas être placés dans ce dossier, car ils alourdissent le code livré et peuvent invalider involontairement le cache Nx

### `./tests`

- Ce dossier doit contenir tous les fichiers de test
- Il doit aussi inclure tous les fichiers de configuration de test requis par le framework
