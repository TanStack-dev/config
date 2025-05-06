---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-05-06T20:43:41.323Z'
id: ci-cd
title: CI/CD
---
## Workflows GitHub

- `pr.yml` :
    - Exécute les tests pour toutes les demandes de pull
    - Exécute `nx affected`, qui ne lance que les tâches avec un cache invalidé
    - Utilise également `pkg-pr-new` pour publier des prévisualisations de paquets et créer des liens vers nos exemples
- `release.yml` :
    - Exécute les tests pour le code fusionné dans les branches de release
    - Exécute `nx run-many`, qui lance toutes les tâches et s'assure que les sorties sont présentes (nécessaire pour la publication des builds)
    - Utilise [Changesets](https://github.com/changesets/changesets) pour gérer le versioning et la publication

## Nx

Les projets TanStack utilisent Nx pour permettre une exécution rapide des tests et des builds. Les tâches sont parallélisées et mises en cache à la fois localement et en CI. Bien que Nx dispose d'un système d'extensions complet, nous n'utilisons Nx que comme un exécuteur de scripts NPM.

### Fichiers de configuration

- `./nx.json` : Fichier de configuration principal, qui définit les dépendances des tâches, les entrées et les sorties
- `./package.json` : Nécessite de spécifier manuellement les scripts au niveau racine (par exemple `test:format`)
- `./**/package.json` : Les scripts au niveau des paquets (par exemple `build`) sont détectés automatiquement

### Agents Nx

- Nx permet de distribuer vos tâches sur plusieurs machines CI, augmentant ainsi le nombre de jobs pouvant être exécutés en parallèle
- Veuillez noter que cela entraîne un délai de démarrage assez significatif
