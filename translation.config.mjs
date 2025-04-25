export default {
  langs: {
    'zh-Hans': {
      name: 'Simplified Chinese',
      // 翻译规则和指南
      guide: `
    - For technical terms that should not be fully translated, use the format: "中文翻译 (English term)"
      Example: "服务端渲染 (SSR)" instead of just "SSR" or just "服务端渲染"
    - Add a space between Chinese characters and English words/symbols to improve readability
    - Maintain consistent translations for common terms across the entire document
`,
      // 常见技术术语翻译词典
      // 格式: 'English term': '中文翻译'
      terms: {},
    },
    'zh-Hant': {
      name: 'Traditional Chinese',
      // 翻譯規則和指南
      guide: `
    - For technical terms that should not be fully translated, use the format: "繁體中文翻譯 (English term)"
      Example: "伺服器渲染 (SSR)" instead of just "SSR" or just "伺服器渲染"
    - Add a space between Chinese characters and English words/symbols to improve readability
    - Maintain consistent translations for common terms across the entire document
`,
      // 常見技術術語翻譯詞典
      // 格式: 'English term': '繁體中文翻譯'
      terms: {},
    },
  },
  docsRoot: 'docs',
  docsContext: `TanStack Config allows you to publish, update, and maintain your packages without having to provide complex configuration.`,
}
