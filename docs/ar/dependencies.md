---
source-updated-at: '2024-07-11T14:20:05.000Z'
translation-updated-at: '2025-05-06T20:45:20.901Z'
id: dependencies
title: Dependencies
---
نستخدم 3 أدوات منفصلة للمساعدة في إدارة التبعيات (dependencies) ومنع تضخم دليل `node_modules` دون داعٍ.

### شريف (Sherif)

- يضمن شريف (Sherif) أن جميع الإشارات إلى تبعية (dependency) ما في مستودع أحادي (monorepo) تستخدم نفس الإصدار
- يساعد ذلك في تجنب مشكلات دقة (resolution) `pnpm`، مثل تعارض الأنواع (type conflicts) الناتج عن تثبيت إصدارين أو أكثر غير متوافقين من نفس التبعية (dependency)

### نيب (Knip)

- يستطيع نيب (Knip) اكتشاف التبعيات (dependencies) غير المستخدمة داخل ملفات `package.json`
- يؤدي ذلك إلى تقليل عدد الحزم (packages) التي يتم تثبيتها دون حاجة من قِبَل المطورين

### رينوفيت (Renovate)

- رينوفيت (Renovate) هو بوت يعمل على جيت هاب (GitHub) لفحص التبعيات (dependencies) القديمة أو غير الآمنة
- يقلل ذلك العبء على المشرفين (maintainers) عن طريق تقديم طلبات السحب (PRs) تلقائيًا
