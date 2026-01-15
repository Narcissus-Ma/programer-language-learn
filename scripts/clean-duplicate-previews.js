#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// 定义根目录和路径
const rootDir = path.join(__dirname, '..');
const navigationDir = path.join(rootDir, 'docs', 'navigation');

// 遍历navigation目录下的所有MD文件
function processNavigationDir(dirPath) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // 递归处理子目录
      processNavigationDir(fullPath);
    } else if (stat.isFile() && path.extname(file) === '.md') {
      // 处理MD文件
      cleanDuplicatePreviews(fullPath);
    }
  });
}

// 清理重复的预览组件
function cleanDuplicatePreviews(mdPath) {
  try {
    let content = fs.readFileSync(mdPath, 'utf8');
    
    // 查找所有HtmlPreview组件
    const previewRegex = /<HtmlPreview.*?\/>\n*\n*/g;
    const matches = content.match(previewRegex);
    
    if (matches && matches.length > 1) {
      // 移除重复的组件，只保留第一个
      const firstPreview = matches[0];
      
      // 先移除所有预览组件
      let cleanedContent = content.replace(previewRegex, '');
      
      // 然后在HTML/CSS示例部分之后添加第一个预览组件
      const htmlExampleRegex = /## HTML\/CSS 示例\n\n以下是HTML\/CSS中.*?的示例代码：\n\n/;
      cleanedContent = cleanedContent.replace(htmlExampleRegex, `$&${firstPreview}`);
      
      fs.writeFileSync(mdPath, cleanedContent, 'utf8');
      console.log(`✓ 清理重复预览组件: ${mdPath}`);
    }
  } catch (error) {
    console.error(`❌ 清理文件失败: ${mdPath}`, error.message);
  }
}

// 开始执行
console.log('开始清理重复的预览组件...');
processNavigationDir(navigationDir);
console.log('清理完成！');
