---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T17:03:15.149Z'
id: eslint
title: ESLint (ESLint)
---
## 目的

このパッケージは、TanStackプロジェクト全体で使用される共有ESLint設定を統一するものです。フレームワークに依存しない設計になっており、フレームワーク固有のプラグインは含まれていません。

## セットアップ

### package.json

- ESLint v9以上がインストールされていることを確認してください

### eslint.config.js

```js
import { tanstackConfig } from '@tanstack/eslint-config'
// OR
import { tanstackConfig } from '@tanstack/config/eslint'

export default [
  ...tanstackConfig,
  {
    // カスタムルールはここに記述
  },
]
```

## プラグイン

- [@eslint/js](https://github.com/eslint/eslint) - ESLintのコアルール
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) - TypeScriptサポートを有効化
- [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x) - インポート/エクスポートのリンター
- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n) - Node.js向けの便利なルール

## ルール

有効化されているルールは、`pnpm dlx @eslint/config-inspector`を実行するか、[こちら](https://github.com/TanStack/config/tree/main/packages/eslint-config)のソースコードを参照することで確認できます。各ルールには、共有設定に含まれている理由を説明するコメントが付いています。
