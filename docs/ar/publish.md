---
source-updated-at: '2025-03-04T06:01:52.000Z'
translation-updated-at: '2025-04-25T17:58:56.400Z'
id: publish
title: نشر
---
## الاستخدام

لاستخدام إعدادات TanStack Config برمجيًا، يمكنك استيراد دالة `publish`:

```ts
import { publish } from '@tanstack/config/publish'
// OR
import { publish } from '@tanstack/publish-config'

publish({
  branchConfigs: configOpts.branchConfigs,
  packages: configOpts.packages,
  rootDir: configOpts.rootDir,
  branch: process.env.BRANCH,
  tag: process.env.TAG,
  ghToken: process.env.GH_TOKEN,
})
  .then(() => {
    console.log('تم نشر الحزم بنجاح!')
  })
  .catch(console.error)
```

> الاستخدام البرمجي متاح فقط لحزم ESM. لدعم ذلك، يجب أن يحتوي ملف `package.json` على:
>
> ```json
> {
>   "type": "module"
> }
> ```
>
> واستخدام `import` بدلاً من `require`.
