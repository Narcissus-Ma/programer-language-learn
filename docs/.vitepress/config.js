export default {
  title: "Code Notes",
  description: "代码笔记",
  base: "/programer-language-learn/",
  ignoreDeadLinks: true,
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "Html/Css", link: "/navigation/html-css" },
      { text: "JavaScript", link: "/navigation/javascript" },
      { text: "Python", link: "/navigation/python" },
      { text: "Java", link: "/navigation/java" },
      { text: "SQL", link: "/navigation/sql" },
      { text: "practice", link: "/navigation/practice" },
      { text: "algorithms", link: "/navigation/algorithms" },
    ],
    sidebar: {
      "/comparisons/": [
        { text: "列表遍历", link: "/comparisons/list-traversal" },
        { text: "字符串处理", link: "/comparisons/string-manipulation" },
        { text: "错误处理", link: "/comparisons/error-handling" },
      ],
      "/examples/js/": [
        { text: "数组操作", link: "/examples/js/array-traversal" },
        { text: "对象处理", link: "/examples/js/object-manipulation" },
      ],
      "/navigation/practice/class/": [
        {
          text: "简单存款系统",
          link: "/navigation/practice/class/bank-account",
        },
        {
          text: "面向对象的相关用法",
          link: "/navigation/practice/class/class-demo",
        },
        {
          text: "员工管理系统",
          link: "/navigation/practice/class/employee-management-system",
        },
        {
          text: "简单图书馆管理系统",
          link: "/navigation/practice/class/library",
        },
        {
          text: "简单矩阵运算",
          link: "/navigation/practice/class/matrix",
        },
        {
          text: "简单学生成绩管理系统",
          link: "/navigation/practice/class/student-grade-management",
        },
      ],
      "/navigation/practice/dictionary/": [
        {
          text: "字典最大最小值",
          link: "/navigation/practice/dictionary/dictionary-max-value",
        },
        {
          text: "字典相关用法",
          link: "/navigation/practice/dictionary/dictionary",
        },
        {
          text: "list 转换为字典",
          link: "/navigation/practice/dictionary/list-to-dictionary",
        },
      ],
      "/navigation/practice/list/": [
        {
          text: "list相关方法",
          link: "/navigation/practice/list/arr",
        },
        {
          text: "clone列表",
          link: "/navigation/practice/list/clone- list",
        },
        {
          text: "list的map与filter方法",
          link: "/navigation/practice/list/filter-map",
        },
        {
          text: "列表去重",
          link: "/navigation/practice/list/find-duplicates",
        },
        {
          text: "查找元素是否在列表中",
          link: "/navigation/practice/list/find-ele",
        },
        {
          text: "查找符合条件的元素",
          link: "/navigation/practice/list/find-elements-by-condition-function",
        },
        {
          text: "查找列表中的第二大元素",
          link: "/navigation/practice/list/find-second-largest",
        },
        {
          text: "检查列表是否有重复元素",
          link: "/navigation/practice/list/has-duplicates",
        },
        {
          text: "list 相关方法",
          link: "/navigation/practice/list/list",
        },
        {
          text: "列表去重",
          link: "/navigation/practice/list/remove-duplicates",
        },
      ],
      "/navigation/practice/math/": [
        {
          text: "armstrong num",
          link: "/navigation/practice/math/armstrong-num",
        },
        {
          text: "计算阶乘",
          link: "/navigation/practice/math/factorial",
        },
        {
          text: "查找一个数的所有因子",
          link: "/navigation/practice/math/find-factors",
        },
        {
          text: "快乐数",
          link: "/navigation/practice/math/happy-num",
        },
        {
          text: "检查一个数是否是完全数",
          link: "/navigation/practice/math/is-perfect-number",
        },
        {
          text: "打印乘法口诀表",
          link: "/navigation/practice/math/multiplication-table",
        },
        {
          text: "Narcissistic 数",
          link: "/navigation/practice/math/narcissustic-num",
        },
        {
          text: "递归实现斐波那契数列",
          link: "/navigation/practice/math/recur-fibo",
        },
        {
          text: "solve quadratic",
          link: "/navigation/practice/math/solve-quadratic",
        },
        {
          text: "计算一个数的立方和",
          link: "/navigation/practice/math/sum-of-series",
        },
      ],
      "/navigation/practice/string/": [
        {
          text: "检查两个字符串是否是变位词",
          link: "/navigation/practice/string/anagram",
        },
        {
          text: "合并多个字符串",
          link: "/navigation/practice/string/combined-string",
        },
        {
          text: "获取字符串的所有前缀",
          link: "/navigation/practice/string/get-all-prefixs",
        },
        {
          text: "检查一个字符串是否是数字",
          link: "/navigation/practice/string/is-number",
        },
        {
          text: "检查一个字符串是否是回文",
          link: "/navigation/practice/string/is_palindrome",
        },
        {
          text: "移除指定位置的字符",
          link: "/navigation/practice/string/remove-str",
        },
        {
          text: "检查一个字符串是否包含数字",
          link: "/navigation/practice/string/string-contain-number",
        },
        {
          text: "字符串反转",
          link: "/navigation/practice/string/string-reversed",
        },
        {
          text: "判断字符串是否包含子字符串",
          link: "/navigation/practice/string/sub-str",
        },
        {
          text: "计算字符串中每个单词的长度",
          link: "/navigation/practice/string/word-lengths",
        },
      ],
      "/navigation/practice/utils/": [
        {
          text: "显示指定年份和月份的日历",
          link: "/navigation/practice/utils/calendar-demo",
        },
        {
          text: "get yesterday",
          link: "/navigation/practice/utils/get-yesterday",
        },
        {
          text: "随机数",
          link: "/navigation/practice/utils/random-demo",
        },
        {
          text: "查找一个数的所有因子",
          link: "/navigation/practice/utils/test",
        },
        {
          text: "将时间字符串转换为时间戳",
          link: "/navigation/practice/utils/timestring-to-timestamp",
        },
        {
          text: "从字符串中提取URL",
          link: "/navigation/practice/utils/url-filter",
        },
      ],
    },
    search: {
      provider: "local",
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: "搜索文档...",
                buttonAriaLabel: "搜索文档",
              },
              modal: {
                noResultsText: "未找到结果",
                resetButtonTitle: "清除搜索词",
                footer: {
                  selectText: "选择",
                  navigateText: "导航",
                  closeText: "关闭",
                },
              },
            },
          },
        },
      },
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/Narcissus-Ma/programer-language-learn",
      },
    ],
  },
};
