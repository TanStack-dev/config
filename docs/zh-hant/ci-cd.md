---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-05-06T20:30:52.232Z'
id: ci-cd
title: CI/CD
---
## GitHub 工作流程 (GitHub Workflows)

- `pr.yml`:
    - 針對所有拉取請求 (pull requests) 執行測試
    - 執行 `nx affected`，僅會執行快取失效的任務
    - 同時使用 `pkg-pr-new` 發布套件預覽版本並建立範例連結
- `release.yml`:
    - 針對合併到發布分支 (release branches) 的程式碼執行測試
    - 執行 `nx run-many`，會執行所有任務並確保輸出存在 (發布建置時的必要步驟)
    - 使用 [Changesets](https://github.com/changesets/changesets) 處理版本控制與發布

## Nx

TanStack 專案使用 Nx 來加速測試與建置的執行速度。任務會並行化處理並在本機與 CI 環境中快取。雖然 Nx 擁有豐富的外掛系統，但我們僅將其作為 NPM 腳本執行器使用。

### 設定檔 (Config Files)

- `./nx.json`: 主要設定檔，定義任務相依性、輸入與輸出
- `./package.json`: 需手動指定根層級腳本 (例如 `test:format`)
- `./**/package.json`: 套件層級腳本 (例如 `build`) 會自動偵測

### Nx 代理 (Nx Agents)

- Nx 允許將任務分散到多台 CI 機器上執行，增加可並行運作的任務數量
- 請注意這會造成相當明顯的啟動延遲
