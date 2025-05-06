---
source-updated-at: '2024-07-11T14:20:05.000Z'
translation-updated-at: '2025-05-06T20:30:35.386Z'
id: dependencies
title: Dependencies
---
我們使用 3 種獨立工具來協助管理相依性 (dependencies)，並避免 `node_modules` 目錄不必要的膨脹。

### Sherif

- Sherif 確保整個 monorepo 中對某個相依性 (dependency) 的所有引用都使用相同版本
- 這有助於避免 pnpm 的解析問題，例如因安裝 2 個以上不相容版本的相同相依性 (dependency) 而導致的類型衝突

### Knip

- Knip 能夠偵測 `package.json` 檔案中未使用的相依性 (dependencies)
- 這可減少開發者不必要安裝的套件數量

### Renovate

- Renovate 是一個在 GitHub 上執行的機器人 (bot)，用於掃描過時或不安全的相依性 (dependencies)
- 透過自動提交 PR 來減輕維護者的負擔
