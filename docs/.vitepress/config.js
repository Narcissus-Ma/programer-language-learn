export default {
  title: 'Code Examples Docs',
  description: '多语言编程示例文档',
  base: '/programer-language-learn/',
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Html/Css', link: '/navigation/html-css' },
      { text: 'JavaScript', link: '/navigation/javascript' },
      { text: 'Python', link: '/navigation/python' },
      { text: 'Java', link: '/navigation/java' },
      { text: 'SQL', link: '/navigation/sql' },
      {text: 'practice', link: '/navigation/practice'}
    ],
    sidebar: {
      '/comparisons/': [
        { text: '列表遍历', link: '/comparisons/list-traversal' },
        { text: '字符串处理', link: '/comparisons/string-manipulation' },
        { text: '错误处理', link: '/comparisons/error-handling' }
      ],
      '/examples/js/': [
        { text: '数组操作', link: '/examples/js/array-traversal' },
        { text: '对象处理', link: '/examples/js/object-manipulation' }
      ]
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档...',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '未找到结果',
                resetButtonTitle: '清除搜索词',
                footer: {
                  selectText: '选择',
                  navigateText: '导航',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Narcissus-Ma/programer-language-learn' }
    ]
  }
}