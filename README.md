# 代码笔记

一个基于VitePress的静态文档网站，用于展示和对比不同编程语言（JavaScript、Python、Java、SQL、HTML、CSS等）的代码示例和用法。

## 🌟 功能特性

- **多语言支持**：涵盖JavaScript、Python、Java、SQL、HTML、CSS等多种语言
- **代码示例**：丰富的代码示例，包括常见算法、数据结构、设计模式等
- **语言对比**：直观对比不同语言的实现方式和语法特点
- **实时预览**：HTML/CSS/JS示例提供实时预览效果
- **全文搜索**：支持搜索代码和文档内容
- **深色/浅色模式**：自动跟随系统或手动切换
- **响应式设计**：适配各种设备尺寸

## 📋 支持的语言

- ✅ JavaScript
- ✅ Python
- ✅ Java
- ✅ SQL
- ✅ HTML/CSS

## 🚀 快速开始

### 1. 克隆仓库

```bash
git clone https://github.com/Narcissus-Ma/programer-language-learn.git
cd programer-language-learn
```

### 2. 安装依赖

```bash
npm install
```

### 3. 本地开发

```bash
npm run dev
```

启动后，访问 http://localhost:5173/programer-language-learn/ 查看效果。

### 4. 构建生产版本

```bash
npm run build
```

构建后的静态文件将生成在 `docs/.vitepress/dist` 目录。

### 5. 预览构建结果

```bash
npm run preview
```

### 6. 一键部署

```bash
npm run deploy
```

自动构建并部署到GitHub Pages。

## 📁 项目结构

```
programer-language-learn/
├── docs/                    # 文档根目录
│   ├── examples/            # 所有代码示例文件
│   │   ├── js/              # JavaScript示例
│   │   ├── python/          # Python示例
│   │   ├── java/            # Java示例
│   │   ├── sql/             # SQL示例
│   │   └── html-css/        # HTML/CSS示例
│   ├── guides/              # 使用指南
│   ├── comparisons/         # 语言对比文档
│   ├── navigation/          # 分类导航文档
│   │   ├── algorithms/      # 算法示例
│   │   ├── html-css/        # HTML/CSS教程
│   │   ├── java/            # Java教程
│   │   ├── javascript/      # JavaScript教程
│   │   ├── other/           # 其他技术
│   │   ├── practice/        # 编程练习
│   │   └── python/          # Python教程
│   ├── index.md             # 首页
│   └── .vitepress/          # VitePress配置
│       ├── configs/         # 配置文件目录
│       │   └── sidebar-configs.json  # 侧边栏配置
│       ├── theme/           # 自定义主题
│       │   └── index.js
│       └── config.js        # 主配置文件
├── scripts/                 # 自动化脚本
│   ├── generate-docs.js     # 自动生成文档脚本
│   ├── clean-invalid-docs.js # 清理无效文档脚本
│   └── validate-code.js     # 代码验证脚本
├── deploy.sh                # 一键部署脚本
├── package.json             # 项目依赖和脚本
└── README.md                # 项目说明
```

## 📚 文档内容

### 语言对比

- [列表遍历](docs/comparisons/list-traversal.md) - 不同语言遍历列表的方法对比
- [字符串处理](docs/comparisons/string-manipulation.md) - 字符串操作方法对比
- [错误处理](docs/comparisons/error-handling.md) - 错误处理机制对比

### 分类导航

#### 算法与数据结构
- [基础算法](docs/navigation/algorithms/basic/)

#### HTML/CSS
- [动画效果](docs/navigation/html-css/Animation/)
- [BFC布局](docs/navigation/html-css/BFC/)
- [布局技巧](docs/navigation/html-css/layout/)
- [视图滚动](docs/navigation/html-css/viewScroll/)

#### JavaScript
- [动画实现](docs/navigation/javascript/animation/)
- [浏览器事件](docs/navigation/javascript/browser-event/)
- [异步编程](docs/navigation/javascript/callback-hell/)
- [Canvas绘图](docs/navigation/javascript/canvas/)
- [代码优化](docs/navigation/javascript/code-for-js/)
- [编译器](docs/navigation/javascript/compiler/)
- [防抖节流](docs/navigation/javascript/debounce/)
- [事件监听](docs/navigation/javascript/mutation-observer/)

#### Java
- [基础语法](docs/navigation/java/basic/)

#### Python
- [基础语法](docs/navigation/python/basic/)

#### 编程练习
- [类与对象](docs/navigation/practice/class/)
- [字典操作](docs/navigation/practice/dictionary/)
- [列表操作](docs/navigation/practice/list/)
- [数学运算](docs/navigation/practice/math/)
- [字符串处理](docs/navigation/practice/string/)
- [工具函数](docs/navigation/practice/utils/)

#### 其他技术
- [混合编程](docs/navigation/other/mixins/)

### 代码示例

#### JavaScript
- [数组操作](docs/examples/js/array-traversal.md)
- [对象处理](docs/examples/js/object-manipulation.md)
- [异步编程](docs/examples/js/async-await.md)

#### Python
- [列表推导式](docs/examples/python/list-comprehension.md)
- [文件操作](docs/examples/python/file-operations.md)
- [装饰器](docs/examples/python/decorators.md)

#### Java
- [Stream API](docs/examples/java/stream-api.md)
- [集合框架](docs/examples/java/collections.md)
- [泛型](docs/examples/java/generics.md)

#### SQL
- [基础查询](docs/examples/sql/basic-queries.md)
- [连接查询](docs/examples/sql/joins.md)
- [窗口函数](docs/examples/sql/window-functions.md)

#### HTML/CSS
- [Flexbox布局](docs/examples/html-css/flexbox.md)
- [Grid布局](docs/examples/html-css/grid-layout.md)
- [响应式设计](docs/examples/html-css/responsive-design.md)

## 🛠️ 自动化脚本

### 自动生成文档

```bash
npm run generate
```

根据代码文件自动生成Markdown文档和侧边栏配置。

### 清理无效文档

```bash
# 仅扫描无效文档
npm run clean -- --scan

# 清理并备份无效文档
npm run clean -- --clean

# 直接清理无效文档（不备份）
npm run clean -- --clean --no-backup
```

扫描并清理包含二进制内容或损坏的无效文档。

### 验证代码语法

```bash
npm run validate:code
```

验证所有代码示例的语法正确性。

## 🎨 技术栈

- **主框架**：VitePress（基于Vite + Vue3）
- **代码高亮**：Shiki
- **构建工具**：Vite
- **部署平台**：GitHub Pages

## 📄 许可证

本项目采用MIT许可证，详见[LICENSE](LICENSE)文件。

## 🤝 贡献指南

欢迎提交代码示例和改进建议！请阅读[贡献指南](docs/guides/contribution-guide.md)了解详细流程。

## 📞 联系方式

如有问题或建议，欢迎通过以下方式联系：

- GitHub Issues：https://github.com/Narcissus-Ma/programer-language-learn/issues

## 🌟 致谢

感谢所有为这个项目做出贡献的开发者！
