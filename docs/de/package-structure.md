---
source-updated-at: '2024-07-19T09:06:46.000Z'
translation-updated-at: '2025-04-25T17:53:22.659Z'
id: package-structure
title: Paketstruktur
---
# Paketstruktur

Die folgende Struktur stellt sicher, dass Pakete optimal mit unserem Monorepo/Nx-Workflow funktionieren.

### `./package.json`

- Alle TanStack-Projekte haben `"type": "module"`, um die Standardauflösung von `.js`-Dateien auf ESM festzulegen; dies hat keine Auswirkungen auf den Build für CJS
- Es ist auch essenziell, ein `"exports"`-Feld zu haben
- Aus Legacy-Gründen sollten Sie auch die Felder `"main"`, `"module"` und `"types"` einfügen
- Alle Pakete haben die folgenden Skripte, die von Nx gecacht werden: `"test:eslint"`, `"test:types"`, `"test:lib"`, `"build"`, `"test:build"`

### `./tsconfig.json`

- Erweitert die tsconfig auf Root-Ebene (z.B. `"extends": "../../tsconfig.json"`)
- Fügen Sie hier alle frameworkspezifischen Optionen und eingeschlossenen Dateien hinzu

### `./vite.config.ts`

- Enthält Konfiguration für Vitest und für Vite, falls [@tanstack/config/vite](./vite.md) verwendet wird

### `./src`

- Dieser Ordner sollte nur Code enthalten, der gebaut und an Benutzer ausgeliefert wird
- Tests sollten nicht in diesem Ordner abgelegt werden, da sie den ausgelieferten Code aufblähen und unbeabsichtigt den Nx-Cache ungültig machen können

### `./tests`

- Dieser Ordner sollte alle Testdateien enthalten
- Er sollte auch alle für das Framework erforderlichen Test-Setup-Dateien enthalten
