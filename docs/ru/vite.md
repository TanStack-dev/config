---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T17:56:38.984Z'
id: vite
title: Vite
---
Конфигурация сборки Vite является результатом нескольких попыток двойной публикации ESM и CJS для проектов TanStack с сохранением совместимости со всеми вариантами разрешения модулей Typescript.

## Нужно ли мне это?

ES Modules (ESM) — это стандарт для написания модулей JavaScript. Однако из-за исторической зависимости от CommonJS (CJS) многие инструменты и проекты экосистемы изначально были несовместимы с ESM. Сейчас такие случаи становятся крайне редкими, и я рекомендую вам задуматься, действительно ли необходимо распространять код в формате CJS. У Синдре Сорхуса есть хорошее резюме по этому вопросу [здесь](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

## Настройка

Конфигурация сборки довольно специфична, так как она разработана для работы с нашими внутренними библиотеками. Если вы будете следовать приведённым ниже инструкциям, она _может_ подойти и для вашей библиотеки!

### package.json

- Убедитесь, что установлено `"type": "module"`.
- Убедитесь, что у вас установлен [Vite](https://www.npmjs.com/package/vite). Также рекомендуется установить [Publint](https://www.npmjs.com/package/publint).
- Измените скрипт сборки на `"build": "vite build && publint --strict"`.
- Убедитесь, что у вас есть поле `"exports"`. Мы используем такой вариант, но у вас могут быть другие требования:

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

- Убедитесь, что поле `"include"` содержит `"vite.config.ts"`.
- Установите `"moduleResolution"` в значение `"bundler"`.

### vite.config.ts

- Импортируйте `mergeConfig` и `tanstackViteConfig`.
- Сначала объедините свою пользовательскую конфигурацию, а затем добавьте `tanstackViteConfig`.
- Пожалуйста, избегайте изменения параметра `build` в своей пользовательской конфигурации.
- Пример ниже:

```ts
import { defineConfig, mergeConfig } from 'vite'

import { tanstackViteConfig } from '@tanstack/config/vite'
// ИЛИ
import { tanstackViteConfig } from '@tanstack/vite-config'

const config = defineConfig({
  // Плагины фреймворка, конфигурация vitest и т.д.
})

export default mergeConfig(
  config,
  tanstackViteConfig({
    entry: './src/index.ts',
    srcDir: './src',
  }),
)
```

## Фреймворки

Хотя эта конфигурация _будет_ работать с большинством фреймворков, поддерживающих адаптер Vite, это не означает, что её _следует_ использовать для всех фреймворков, так как многие из них имеют собственные инструменты сборки, оптимизированные для их экосистемы. Если существует инструмент сборки, специфичный для фреймворка, предпочтение следует отдавать ему.

| Фреймворк | Рекомендация                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------- |
| Angular   | [ng-packagr](https://www.npmjs.com/package/ng-packagr) (официальный инструмент)                             |
| React     | [@tanstack/config](https://www.npmjs.com/package/@tanstack/config) (только если нужна двойная ESM/CJS) |
| Solid     | [tsc](https://www.npmjs.com/package/typescript) (сохраняет JSX, необходимо для SSR)                 |
| Svelte    | [@sveltejs/package](https://www.npmjs.com/package/@sveltejs/package) (официальный инструмент)               |
| Vue       | [@tanstack/config](https://www.npmjs.com/package/@tanstack/config) (только если нужна двойная ESM/CJS) |
