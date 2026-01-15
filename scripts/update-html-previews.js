#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// 定义根目录和路径
const rootDir = path.join(__dirname, '..');
const navigationDir = path.join(rootDir, 'docs', 'navigation');
const publicDemoDir = path.join(rootDir, 'docs', 'public', 'demo');
const baseUrl = '/programer-language-learn/demo/';

// 确保目标目录存在
if (!fs.existsSync(publicDemoDir)) {
  fs.mkdirSync(publicDemoDir, { recursive: true });
  console.log(`✓ 创建目录: ${publicDemoDir}`);
}

// 遍历navigation目录下的所有HTML文件
function processNavigationDir(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // 递归处理子目录
      processNavigationDir(fullPath);
    } else if (stat.isFile() && path.extname(file) === '.html') {
      // 处理HTML文件
      processHtmlFile(fullPath, file);
    }
  });
}

// 处理单个HTML文件
function processHtmlFile(htmlPath, htmlFileName) {
  try {
    // 1. 复制HTML文件到public/demo目录
    const destPath = path.join(publicDemoDir, htmlFileName);
    fs.copyFileSync(htmlPath, destPath);
    console.log(`✓ 复制文件: ${htmlPath} → ${destPath}`);
    
    // 2. 找到对应的MD文件
    const mdPath = htmlPath.replace('.html', '.md');
    if (!fs.existsSync(mdPath)) {
      console.log(`⚠️  未找到对应的MD文件: ${mdPath}`);
      return;
    }
    
    // 3. 更新MD文件，插入HtmlPreview组件
    updateMarkdownFile(mdPath, htmlFileName);
  } catch (error) {
    console.error(`❌ 处理文件失败: ${htmlPath}`, error.message);
  }
}

// 更新Markdown文件
function updateMarkdownFile(mdPath, htmlFileName) {
  try {
    const content = fs.readFileSync(mdPath, 'utf8');
    
    // 创建预览组件HTML - 使用自适应高度
    const previewHtml = `<HtmlPreview src="${baseUrl}${htmlFileName}" height="auto" />\n\n`;
    
    // 1. 移除现有预览组件（如果存在）
    let updatedContent = content.replace(/<HtmlPreview.*?\/>\n*\n*/g, '');
    
    // 2. 查找"## HTML/CSS 示例"标题，在其后插入预览组件
    const htmlExampleRegex = /## HTML\/CSS 示例\n/;
    updatedContent = updatedContent.replace(htmlExampleRegex, `$&${previewHtml}`);
    
    // 如果没有找到标题，就在文档开头添加
    const finalContent = updatedContent === content ? `${content}` : updatedContent;
    
    // 写入更新后的内容
    fs.writeFileSync(mdPath, finalContent, 'utf8');
    console.log(`✓ 更新MD文件: ${mdPath}`);
  } catch (error) {
    console.error(`❌ 更新MD文件失败: ${mdPath}`, error.message);
  }
}

// 开始执行
console.log('开始处理HTML文档和MD文件...');
processNavigationDir(navigationDir);
console.log('处理完成！');
