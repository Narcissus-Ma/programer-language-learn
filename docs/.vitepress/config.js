import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 读取侧边栏配置
const sidebarConfigPath = path.join(__dirname, 'configs', 'sidebar-configs.json');
let sidebarConfig = {};
if (fs.existsSync(sidebarConfigPath)) {
  const configContent = fs.readFileSync(sidebarConfigPath, 'utf8');
  sidebarConfig = JSON.parse(configContent);
}

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
      { text: "Practice", link: "/navigation/practice" },
      { text: "Algorithms", link: "/navigation/algorithms" },
      { text: "Other", link: "/navigation/other" },
    ],
    sidebar: sidebarConfig,
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
