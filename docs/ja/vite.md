---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T17:03:42.411Z'
id: vite
title: Vite (Vite)
---
Viteのビルド設定は、TanStackプロジェクト向けにESMとCJSのデュアル公開を実現しつつ、すべてのTypeScriptモジュール解決オプションとの互換性を維持するための数多くの試行錯誤の集大成です。

## これは必要ですか？

ESモジュール (ESM) はJavaScriptモジュールの標準です。しかし、CommonJS (CJS) への歴史的な依存関係のため、多くのエコシステムツールやプロジェクトは当初ESMと互換性がありませんでした。現在ではこのようなケースは非常に稀になっており、CJSコードを配布する必要性自体を検討することをお勧めします。Sindre Sorhusがこの問題について優れた要約を[こちら](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)で提供しています。

## セットアップ

このビルド設定はかなり意見が強く、私たちの内部ライブラリで動作するように設計されています。以下の手順に従えば、あなたのライブラリでも動作する可能性があります！

### package.json

- `"type": "module"` が設定されていることを確認してください
- [Vite](https://www.npmjs.com/package/vite) がインストールされていることを確認してください。[Publint](https://www.npmjs.com/package/publint) のインストールも推奨します
- ビルドスクリプトを `"build": "vite build && publint --strict"` に変更してください
- `"exports"` フィールドがあることを確認してください。私たちは以下の設定を使用していますが、要件が異なる場合があります:

```json
{
  "exports": {
    ".": {
      "import": {
        "types": "./dist/esm/index.d.ts",
        "default": "./dist/esm/index.js"
      },
      "require": {
        "types": "./dist/cjs/index.d.cts",
        "default": "./dist/cjs/index.cjs"
      }
    },
    "./package.json": "./package.json"
  }
}
```

### tsconfig.json

- `"include"` フィールドに `"vite.config.ts"` が含まれていることを確認してください
- `"moduleResolution"` を `"bundler"` に設定してください

### vite.config.ts

- `mergeConfig` と `tanstackViteConfig` をインポートしてください
- 最初にカスタム設定をマージし、その後に `tanstackViteConfig` をマージしてください
- カスタム設定で `build` を変更しないでください
- 以下の例を参照してください:

```ts
import { defineConfig, mergeConfig } from 'vite'

import { tanstackViteConfig } from '@tanstack/config/vite'
// または
import { tanstackViteConfig } from '@tanstack/vite-config'

const config = defineConfig({
  // フレームワークプラグイン、vitest設定など
})

export default mergeConfig(
  config,
  tanstackViteConfig({
    entry: './src/index.ts',
    srcDir: './src',
  }),
)
```

## フレームワーク

この設定はViteアダプタを持つほとんどのフレームワークで動作しますが、多くのフレームワークにはそのエコシステム向けに最適化された独自のビルドツールがあるため、すべてのフレームワークで使用すべきというわけではありません。フレームワーク固有のビルドツールが存在する場合は、そちらを優先してください。

| フレームワーク | 推奨ツール                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------- |
| Angular   | [ng-packagr](https://www.npmjs.com/package/ng-packagr) (公式ツール)                             |
| React     | [@tanstack/config](https://www.npmjs.com/package/@tanstack/config) (ESM/CJSデュアル対応が必要な場合のみ) |
| Solid     | [tsc](https://www.npmjs.com/package/typescript) (JSXを保持、SSRに必要)                 |
| Svelte    | [@sveltejs/package](https://www.npmjs.com/package/@sveltejs/package) (公式ツール)               |
| Vue       | [@tanstack/config](https://www.npmjs.com/package/@tanstack/config) (ESM/CJSデュアル対応が必要な場合のみ) |
