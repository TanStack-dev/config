---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-05-06T20:42:47.362Z'
id: ci-cd
title: CI/CD
---
## GitHub-Workflows

- `pr.yml`:
    - Führt Tests für alle Pull Requests aus
    - Führt `nx affected` aus, das nur Tasks mit ungültigem Cache ausführt
    - Verwendet auch `pkg-pr-new`, um Paketvorschauen zu veröffentlichen und Links zu unseren Beispielen zu erstellen
- `release.yml`:
    - Führt Tests für Code aus, der in Release-Branches gemerged wurde
    - Führt `nx run-many` aus, das alle Tasks ausführt und sicherstellt, dass die Ausgaben vorhanden sind (notwendig für die Veröffentlichung von Builds)
    - Verwendet [Changesets](https://github.com/changesets/changesets), um Versionierung und Veröffentlichung zu handhaben

## Nx

Die TanStack-Projekte verwenden Nx, um eine schnelle Ausführung unserer Tests und Builds zu ermöglichen. Tasks werden parallelisiert und sowohl lokal als auch in der CI zwischengespeichert. Obwohl Nx über ein umfangreiches Plugin-System verfügt, nutzen wir Nx nur als NPM-Script-Runner.

### Konfigurationsdateien

- `./nx.json`: Hauptkonfigurationsdatei, die Task-Abhängigkeiten, Inputs und Outputs definiert
- `./package.json`: Muss manuell Root-Level-Scripts angeben (z.B. `test:format`)
- `./**/package.json`: Paket-Level-Scripts (z.B. `build`) werden automatisch erkannt

### Nx-Agents

- Nx ermöglicht es, Tasks auf mehrere CI-Maschinen zu verteilen, wodurch die Anzahl der parallel ausführbaren Jobs erhöht wird
- Bitte beachten Sie, dass dies eine recht erhebliche Startverzögerung verursacht
