---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T17:58:45.231Z'
id: vite
title: Vite
---
إعداد البناء باستخدام Vite هو نتيجة عدة محاولات لنشر كل من ESM و CJS لمشاريع TanStack، مع الحفاظ على التوافق مع جميع خيارات دقة وحدات Typescript.

## هل أحتاج هذا؟

وحدات ES (ESM) هي المعيار لكتابة وحدات JavaScript. ومع ذلك، بسبب الاعتماد التاريخي على CommonJS (CJS)، كانت العديد من أدوات النظام البيئي والمشاريع غير متوافقة في البداية مع ESM. أصبح من النادر جدًا أن يكون هذا هو الحال، وأود أن أحثك على التفكير فيما إذا كان من الضروري توزيع كود CJS على الإطلاق. لدى Sindre Sorhus ملخص جيد حول هذه المشكلة [هنا](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).

## الإعداد

تكوين البناء متحيز إلى حد ما، حيث تم تصميمه للعمل مع مكتباتنا الداخلية. إذا اتبعت التعليمات أدناه، فقد يعمل لمكتبتك أيضًا!

### package.json

- تأكد من تعيين `"type": "module"`.
- تأكد من تثبيت [Vite](https://www.npmjs.com/package/vite). يُنصح أيضًا بتثبيت [Publint](https://www.npmjs.com/package/publint).
- غيّر سكريبت البناء إلى `"build": "vite build && publint --strict"`.
- تأكد من وجود حقل `"exports"`. نستخدم هذا، ولكن قد يكون لديك متطلبات مختلفة:

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

- تأكد من أن حقل `"include"` يتضمن `"vite.config.ts"`.
- اضبط `"moduleResolution"` على `"bundler"`.

### vite.config.ts

- استورد `mergeConfig` و `tanstackViteConfig`.
- ادمج التكوين المخصص أولاً، متبوعًا بـ `tanstackViteConfig`.
- يرجى تجنب تعديل `build` في التكوين المخصص.
- انظر المثال أدناه:

```ts
import { defineConfig, mergeConfig } from 'vite'

import { tanstackViteConfig } from '@tanstack/config/vite'
// OR
import { tanstackViteConfig } from '@tanstack/vite-config'

const config = defineConfig({
  // Framework plugins, vitest config, etc.
})

export default mergeConfig(
  config,
  tanstackViteConfig({
    entry: './src/index.ts',
    srcDir: './src',
  }),
)
```

## الأطر

بينما سيعمل هذا التكوين مع معظم الأطر التي تحتوي على محول Vite، إلا أن هذا لا يعني أنه يجب عليك استخدامه لجميع الأطر، حيث أن العديد منها لديه أدوات بناء خاصة بهم ومُحسّنة لنظامهم البيئي. عندما توجد أداة بناء خاصة بإطار معين، يجب تفضيلها.

| الإطار   | التوصية                                                                                     |
| -------- | ------------------------------------------------------------------------------------------ |
| Angular  | [ng-packagr](https://www.npmjs.com/package/ng-packagr) (أداة رسمية)                        |
| React    | [@tanstack/config](https://www.npmjs.com/package/@tanstack/config) (فقط إذا كنت بحاجة إلى ESM/CJS مزدوج) |
| Solid    | [tsc](https://www.npmjs.com/package/typescript) (يحافظ على JSX، ضروري لـ SSR)               |
| Svelte   | [@sveltejs/package](https://www.npmjs.com/package/@sveltejs/package) (أداة رسمية)          |
| Vue      | [@tanstack/config](https://www.npmjs.com/package/@tanstack/config) (فقط إذا كنت بحاجة إلى ESM/CJS مزدوج) |
