# 多语言代码示例文档系统

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
git clone https://gitee.com/Narcissus-ma/programer-language-learn.git
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
│   │   ├── html-css/        # HTML/CSS示例
│   │   └── shared/          # 跨语言通用示例
│   ├── guides/              # 使用指南
│   ├── comparisons/         # 语言对比文档
│   ├── index.md             # 首页
│   └── .vitepress/          # VitePress配置
│       ├── config.js        # 主配置文件
│       └── theme/           # 自定义主题
│           └── index.js
├── scripts/                 # 自动化脚本
│   ├── generate-docs.js     # 自动生成文档脚本
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
npm run generate:docs
```

根据代码文件自动生成Markdown文档。

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

- GitHub Issues：https://gitee.com/Narcissus-ma/programer-language-learn/issues

## 🌟 致谢

感谢所有为这个项目做出贡献的开发者！
