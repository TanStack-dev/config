export default {
  langs: {
    zh: {
      code: 'zh',
      name: 'Chinese',
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
  },
  docsRoot: 'docs',
  docsContext: `TanStack Config allows you to publish, update, and maintain your packages without having to provide complex configuration.`,
}
