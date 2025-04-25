---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T17:57:30.468Z'
id: eslint
title: ESLint
---
## الغرض

هذه الحزمة توحد تكوين ESLint المشترك المستخدم في جميع مشاريع TanStack. تم تصميمها لتكون مستقلة عن الإطار (framework-agnostic)، ولا تتضمن أي إضافات (plugins) خاصة بإطار معين.

## الإعداد

### package.json

- تأكد من تثبيت ESLint الإصدار 9 أو أحدث

### eslint.config.js

```js
import { tanstackConfig } from '@tanstack/eslint-config'
// OR
import { tanstackConfig } from '@tanstack/config/eslint'

export default [
  ...tanstackConfig,
  {
    // يمكنك إضافة القواعد المخصصة هنا
  },
]
```

## الإضافات (Plugins)

- [@eslint/js](https://github.com/eslint/eslint) - القواعد الأساسية لـ ESLint
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint) - يدعم TypeScript
- [eslint-plugin-import-x](https://github.com/un-ts/eslint-plugin-import-x) - يفحص عمليات الاستيراد والتصدير
- [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n) - قواعد مفيدة لـ Node.js

## القواعد (Rules)

يمكنك فحص القواعد المفعّلة عن طريق تشغيل الأمر `pnpm dlx @eslint/config-inspector`، أو عن طريق تصفح المصدر [هنا](https://github.com/TanStack/config/tree/main/packages/eslint-config). كل قاعدة تحتوي على تعليق يوضح سبب تضمينها في التكوين المشترك.
