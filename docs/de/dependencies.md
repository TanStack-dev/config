---
source-updated-at: '2024-07-11T14:20:05.000Z'
translation-updated-at: '2025-05-06T20:42:26.796Z'
id: dependencies
title: Dependencies
---
# Abhängigkeiten (Dependencies)

Wir verwenden 3 separate Tools, um unsere Abhängigkeiten zu verwalten und zu verhindern, dass das `node_modules`-Verzeichnis unnötig aufgebläht wird.

### Sherif

- Sherif stellt sicher, dass alle Referenzen zu einer Abhängigkeit im gesamten Monorepo auf der gleichen Version basieren
- Dies hilft, Probleme mit der pnpm-Auflösung zu vermeiden, wie z.B. Typenkonflikte durch die Installation von 2+ inkompatiblen Versionen derselben Abhängigkeit

### Knip

- Knip kann ungenutzte Abhängigkeiten in `package.json`-Dateien erkennen
- Dadurch werden weniger Pakete unnötig von Entwicklern installiert

### Renovate

- Renovate ist ein Bot, der auf GitHub läuft, um nach veralteten oder unsicheren Abhängigkeiten zu suchen
- Dies verringert die Belastung für Maintainer, indem automatisch PRs erstellt werden
