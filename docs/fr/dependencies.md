---
source-updated-at: '2024-07-11T14:20:05.000Z'
translation-updated-at: '2025-05-06T20:43:21.500Z'
id: dependencies
title: Dependencies
---
# Dépendances

Nous utilisons 3 outils distincts pour nous aider à gérer nos dépendances et éviter d'encombrer inutilement le répertoire `node_modules`.

### Sherif

- Sherif garantit que toutes les références à une dépendance dans le monorepo utilisent la même version  
- Cela permet d'éviter les problèmes de résolution avec pnpm, comme les conflits de types dus à l'installation de 2 versions incompatibles d'une même dépendance

### Knip

- Knip peut détecter les dépendances inutilisées dans les fichiers `package.json`  
- Cela réduit le nombre de paquets installés inutilement par les développeurs

### Renovate

- Renovate est un bot qui s'exécute sur GitHub pour détecter les dépendances obsolètes ou non sécurisées  
- Cela allège la charge des mainteneurs en soumettant automatiquement des PRs
