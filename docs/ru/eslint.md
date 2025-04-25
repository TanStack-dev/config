---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T17:57:06.913Z'
id: eslint
title: ESLint
---
## Назначение

Этот пакет объединяет общую конфигурацию ESLint, используемую во всех проектах TanStack. Он разработан как независимый от фреймворков и не включает плагины, специфичные для каких-либо фреймворков.

## Настройка

### package.json

- Убедитесь, что у вас установлен ESLint версии 9 или выше.

### eslint.config.js

```js
import { tanstackConfig } from '@tanstack/eslint-config'
// ИЛИ
import { tanstackConfig } from '@tanstack/config/eslint'

export default [
  ...tanstackConfig,
  {
    // Пользовательские правила добавляются здесь
  },
]
```

## Плагины

- [@eslint/js](https://github.com/eslint/eslint) — основные правила ESLint
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) — добавляет поддержку TypeScript
- [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x) — проверяет импорты и экспорты
- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n) — полезные правила для Node.js

## Правила

Вы можете просмотреть включённые правила, выполнив команду `pnpm dlx @eslint/config-inspector`, или изучив исходный код [здесь](https://github.com/TanStack/config/tree/main/packages/eslint-config). Каждое правило снабжено комментарием, объясняющим его наличие в общей конфигурации.
