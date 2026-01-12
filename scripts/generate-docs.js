#!/usr/bin/env node

// 自动生成文档脚本
// 功能：根据代码文件自动生成Markdown文档

const fs = require('fs');
const path = require('path');

// 配置
const EXAMPLES_DIR = path.join(__dirname, '../docs/examples');
const OUTPUT_DIR = path.join(__dirname, '../docs/examples');

// 支持的语言和对应的文件扩展名
const SUPPORTED_LANGUAGES = {
    js: 'JavaScript',
    python: 'Python',
    java: 'Java',
    sql: 'SQL',
    'html-css': 'HTML/CSS'
};

// 获取文件的语言类型
function getLanguage(filePath) {
    const ext = path.extname(filePath).slice(1);
    switch (ext) {
        case 'js':
            return 'js';
        case 'py':
            return 'python';
        case 'java':
            return 'java';
        case 'sql':
            return 'sql';
        case 'html':
        case 'css':
            return 'html-css';
        default:
            return null;
    }
}

// 获取文件名的中文标题
function getTitle(fileName) {
    const titleMap = {
        'array-traversal': '数组遍历',
        'object-manipulation': '对象处理',
        'async-await': '异步编程',
        'list-comprehension': '列表推导式',
        'file-operations': '文件操作',
        'decorators': '装饰器',
        'stream-api': 'Stream API',
        'collections': '集合框架',
        'generics': '泛型',
        'basic-queries': '基础查询',
        'joins': '连接查询',
        'window-functions': '窗口函数',
        'flexbox': 'Flexbox布局',
        'grid-layout': 'Grid布局',
        'responsive-design': '响应式设计'
    };
    
    const baseName = path.basename(fileName, path.extname(fileName));
    return titleMap[baseName] || baseName;
}

// 生成Markdown文档
function generateMarkdown(language, filePath, fileName) {
    const fullPath = path.join(language, fileName);
    const content = fs.readFileSync(path.join(EXAMPLES_DIR, fullPath), 'utf8');
    const title = getTitle(fileName);
    const languageName = SUPPORTED_LANGUAGES[language];
    const ext = path.extname(fileName).slice(1);
    
    // 生成Markdown内容
    const mdContent = `# ${title}

## ${languageName} ${title}示例

以下是${languageName}中${title}的示例代码：

\`\`\`${ext}
${content}
\`\`\`

## 说明

该示例展示了${languageName}中${title}的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../../index.md)
- [语言对比](../../comparisons/)
`;
    
    // 生成输出文件路径
    const outputFileName = path.basename(fileName, path.extname(fileName)) + '.md';
    const outputPath = path.join(OUTPUT_DIR, language, outputFileName);
    
    // 写入文件
    fs.writeFileSync(outputPath, mdContent, 'utf8');
    console.log(`✓ 生成文档: ${outputPath}`);
}

// 主函数
function main() {
    console.log('🔄 开始生成文档...');
    
    // 遍历所有支持的语言目录
    for (const language of Object.keys(SUPPORTED_LANGUAGES)) {
        const languageDir = path.join(EXAMPLES_DIR, language);
        
        // 检查目录是否存在
        if (!fs.existsSync(languageDir)) {
            console.warn(`⚠️  目录不存在: ${languageDir}`);
            continue;
        }
        
        // 遍历目录下的所有文件
        const files = fs.readdirSync(languageDir);
        for (const file of files) {
            const filePath = path.join(languageDir, file);
            const stats = fs.statSync(filePath);
            
            // 只处理文件，不处理目录，且只处理代码文件（跳过.md文件）
            if (stats.isFile() && !file.endsWith('.md')) {
                // 检查文件是否为支持的类型
                const fileLang = getLanguage(filePath);
                if (fileLang) {
                    generateMarkdown(language, filePath, file);
                } else {
                    console.warn(`⚠️  不支持的文件类型: ${file}`);
                }
            }
        }
    }
    
    console.log('✅ 文档生成完成！');
}

// 执行主函数
main();