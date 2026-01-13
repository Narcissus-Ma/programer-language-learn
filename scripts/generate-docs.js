#!/usr/bin/env node

// 自动生成文档脚本
// 功能：根据代码文件自动生成Markdown文档

const fs = require("fs");
const path = require("path");

// 配置
const EXAMPLES_DIR = path.join(__dirname, "../docs/examples");
const NAVIGATION_DIR = path.join(__dirname, "../docs/navigation");
const OUTPUT_DIR = path.join(__dirname, "../docs");

// 支持的语言和对应的文件扩展名
const SUPPORTED_LANGUAGES = {
  js: "JavaScript",
  python: "Python",
  java: "Java",
  sql: "SQL",
  "html-css": "HTML/CSS",
};

// 支持的文件扩展名和对应的语言
const EXT_TO_LANGUAGE = {
  ".js": "JavaScript",
  ".py": "Python",
  ".java": "Java",
  ".sql": "SQL",
  ".html": "HTML/CSS",
  ".css": "HTML/CSS",
};

// 获取文件的语言类型
function getLanguage(filePath) {
  const ext = path.extname(filePath).slice(1);
  switch (ext) {
    case "js":
      return "js";
    case "py":
      return "python";
    case "java":
      return "java";
    case "sql":
      return "sql";
    case "html":
    case "css":
      return "html-css";
    default:
      return null;
  }
}

// 从文件第一行注释中提取标题
function extractTitleFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, "utf8");
    const firstLine = content.split("\n")[0].trim();

    // 匹配注释中的title关键字
    if (firstLine.includes("title")) {
      // 支持 # title: 或 // title: 或 /* title: 格式
      const titleMatch = firstLine.match(/title:\s*(.+)/i);
      if (titleMatch && titleMatch[1]) {
        return titleMatch[1].trim();
      }
    }

    // 如果没有title注释，使用文件名作为标题
    const baseName = path.basename(filePath, path.extname(filePath));
    return baseName.replace(/-/g, " ");
  } catch (error) {
    console.warn(`⚠️  读取文件标题失败: ${filePath}`, error.message);
    return path.basename(filePath, path.extname(filePath));
  }
}

// 递归获取目录下所有文件
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    // 跳过隐藏文件
    if (file.startsWith(".")) {
      return;
    }
    
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// 按文件名（不含扩展名）分组文件
function groupFilesByBaseName(files) {
  const groups = {};

  files.forEach((filePath) => {
    const baseName = path.basename(filePath, path.extname(filePath));
    const relPath = path.relative(
      path.join(__dirname, "../docs"),
      path.dirname(filePath)
    );

    if (!groups[relPath]) {
      groups[relPath] = {};
    }

    if (!groups[relPath][baseName]) {
      groups[relPath][baseName] = [];
    }

    groups[relPath][baseName].push(filePath);
  });

  return groups;
}

// 生成Markdown文档
function generateMarkdown(groupPath, baseName, files) {
  // 提取标题（从第一个文件）
  const title = extractTitleFromFile(files[0]);

  // 生成多语言代码示例
  let codeExamples = "";
  files.forEach((filePath) => {
    try {
      const content = fs.readFileSync(filePath, "utf8");
      const ext = path.extname(filePath);
      const languageName = EXT_TO_LANGUAGE[ext] || ext.slice(1);
      const codeLang = ext.slice(1);

      codeExamples += `## ${languageName} 示例

以下是${languageName}中${title}的示例代码：

\`\`\`${codeLang}
${content}
\`\`\`

`;
    } catch (error) {
      console.warn(`⚠️  读取文件内容失败: ${filePath}`, error.message);
    }
  });

  // 生成Markdown内容
  const mdContent = `# ${title}

${codeExamples}## 说明

该示例展示了不同语言中${title}的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
`;

  // 生成输出文件路径
  const outputFileName = baseName + ".md";
  const outputPath = path.join(OUTPUT_DIR, groupPath, outputFileName);

  // 确保输出目录存在
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  // 写入文件
  fs.writeFileSync(outputPath, mdContent, "utf8");
  console.log(`✓ 生成文档: ${outputPath}`);

  return {
    title: title,
    link: `${baseName}.md`,
  };
}

// 更新目录索引文件
function updateIndexFile(dirPath, documents) {
  const indexPath = path.join(OUTPUT_DIR, dirPath, "index.md");

  // 生成索引内容
  let indexContent = `# 目录

`;

  documents.forEach((doc) => {
    indexContent += `- [${doc.title}](${doc.link})
`;
  });

  // 写入索引文件
  fs.writeFileSync(indexPath, indexContent, "utf8");
  console.log(`✓ 更新索引: ${indexPath}`);
}

// 生成目录结构并创建所有必要的索引文件
function generateDirectoryIndexes() {
  const allDirs = new Set();

  // 获取所有目录
  const scanDirs = [EXAMPLES_DIR, NAVIGATION_DIR];
  scanDirs.forEach((dir) => {
    if (fs.existsSync(dir)) {
      const getAllDirs = (currentDir) => {
        const files = fs.readdirSync(currentDir);
        files.forEach((file) => {
          const filePath = path.join(currentDir, file);
          const stats = fs.statSync(filePath);

          if (stats.isDirectory() && !file.startsWith(".")) {
            const relPath = path.relative(
              path.join(__dirname, "../docs"),
              filePath
            );
            allDirs.add(relPath);
            getAllDirs(filePath);
          }
        });
      };
      getAllDirs(dir);
    }
  });

  // 为每个目录生成索引
  allDirs.forEach((dirPath) => {
    const fullDirPath = path.join(OUTPUT_DIR, dirPath);
    const items = [];

    // 检查并添加子目录
    const files = fs.readdirSync(fullDirPath);
    files.forEach((file) => {
      const filePath = path.join(fullDirPath, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory() && !file.startsWith(".")) {
        items.push({
          type: "dir",
          name: file,
          link: `${file}/index.md`,
        });
      } else if (
        stats.isFile() &&
        file.endsWith(".md") &&
        file !== "index.md" &&
        !file.startsWith(".")
      ) {
        // 添加直接的md文件
        try {
          const content = fs.readFileSync(filePath, "utf8");
          const titleMatch = content.match(/^#\s*(.+)$/m);
          const title = titleMatch ? titleMatch[1] : file.replace(".md", "");

          items.push({
            type: "file",
            name: title,
            link: file,
          });
        } catch (error) {
          console.warn(`⚠️  读取文件标题失败: ${filePath}`, error.message);
        }
      }
    });

    // 如果有内容，生成索引
    if (items.length > 0) {
      let indexContent = `# 目录\n\n`;

      // 先添加子目录
      const dirItems = items.filter((item) => item.type === "dir");
      dirItems.forEach((item) => {
        indexContent += `- [${item.name}](${item.link})\n`;
      });

      // 再添加文件
      const fileItems = items.filter((item) => item.type === "file");
      fileItems.forEach((item) => {
        indexContent += `- [${item.name}](${item.link})\n`;
      });

      const indexPath = path.join(fullDirPath, "index.md");
      fs.writeFileSync(indexPath, indexContent, "utf8");
      console.log(`✓ 更新目录索引: ${indexPath}`);
    }
  });
}

// 主函数
function main() {
  console.log("🔄 开始生成文档...");

  // 获取所有代码文件
  const allFiles = [];

  // 扫描examples目录
  if (fs.existsSync(EXAMPLES_DIR)) {
    const examplesFiles = getAllFiles(EXAMPLES_DIR);
    allFiles.push(
      ...examplesFiles.filter(
        (file) => !file.endsWith(".md") && !path.basename(file).startsWith(".")
      )
    );
  }

  // 扫描navigation目录
  if (fs.existsSync(NAVIGATION_DIR)) {
    const navigationFiles = getAllFiles(NAVIGATION_DIR);
    allFiles.push(
      ...navigationFiles.filter(
        (file) => !file.endsWith(".md") && !path.basename(file).startsWith(".")
      )
    );
  }

  // 按目录和基名分组文件
  const groupedFiles = groupFilesByBaseName(allFiles);

  // 为每个分组生成文档并更新索引
  for (const [groupPath, baseNameGroups] of Object.entries(groupedFiles)) {
    const documents = [];

    for (const [baseName, files] of Object.entries(baseNameGroups)) {
      // 生成文档
      const docInfo = generateMarkdown(groupPath, baseName, files);
      documents.push(docInfo);
    }

    // 更新目录索引
    updateIndexFile(groupPath, documents);
  }

  // 生成所有目录的索引文件
  generateDirectoryIndexes();

  console.log("✅ 文档生成完成！");
}

// 更新侧边栏配置
function updateSidebarConfig() {
  const configPath = path.join(__dirname, '../docs/.vitepress/config.js');
  
  try {
    // 读取配置文件
    let configContent = fs.readFileSync(configPath, 'utf8');
    
    // 生成侧边栏配置内容
    let newSidebarContent = '';
    
    // 扫描navigation/practice目录下的所有子目录
    const practiceDir = path.join(OUTPUT_DIR, 'navigation', 'practice');
    if (fs.existsSync(practiceDir)) {
      const practiceSubdirs = fs.readdirSync(practiceDir).filter(file => {
        const filePath = path.join(practiceDir, file);
        return fs.statSync(filePath).isDirectory();
      });
      
      practiceSubdirs.forEach(subdir => {
        const subdirPath = path.join(practiceDir, subdir);
        const sidebarKey = `/navigation/practice/${subdir}`;
        const sidebarItems = [];
        
        // 读取该目录下的index.md文件获取文档列表
        const indexPath = path.join(subdirPath, 'index.md');
        if (fs.existsSync(indexPath)) {
          const indexContent = fs.readFileSync(indexPath, 'utf8');
          
          // 匹配所有文档链接
          const linkMatches = indexContent.matchAll(/\-\s+\[(.*?)\]\((.*?)\)/g);
          
          for (const match of linkMatches) {
            if (match[1] && match[2]) {
              // 移除.md扩展名
              const link = match[2].replace('.md', '');
              sidebarItems.push({
                text: match[1],
                link: `/navigation/practice/${subdir}/${link}`
              });
            }
          }
        }
        
        // 如果有文档，添加到侧边栏配置
        if (sidebarItems.length > 0) {
          const itemsString = JSON.stringify(sidebarItems, null, 4).replace(/\n/g, '\n      ');
          newSidebarContent += `      "${sidebarKey}/": ${itemsString},
`;
        }
      });
    }
    
    // 如果有新的侧边栏内容，更新配置文件
    if (newSidebarContent) {
      // 查找sidebar部分的位置
      const sidebarRegex = /sidebar:\s*\{[\s\S]*?\},/;
      const match = configContent.match(sidebarRegex);
      
      if (match) {
        const existingSidebar = match[0];
        
        // 移除practice相关的旧配置
        let cleanedSidebar = existingSidebar.replace(/\s*"\/navigation\/practice\/.*?\/":\s*\[[\s\S]*?\],?/g, '');
        
        // 添加新的practice配置
        const updatedSidebar = cleanedSidebar.replace(/sidebar:\s*\{/, `sidebar: {\n${newSidebarContent}`);
        
        // 更新配置文件内容
        const newConfigContent = configContent.replace(existingSidebar, updatedSidebar);
        
        // 写入配置文件
        fs.writeFileSync(configPath, newConfigContent, 'utf8');
        console.log('✓ 更新侧边栏配置: ' + configPath);
      }
    }
    
  } catch (error) {
    console.error('❌ 更新侧边栏配置失败:', error.message);
  }
}

// 主函数
function main() {
  console.log('🔄 开始生成文档...');

  // 获取所有代码文件
  const allFiles = [];

  // 扫描examples目录
  if (fs.existsSync(EXAMPLES_DIR)) {
    const examplesFiles = getAllFiles(EXAMPLES_DIR);
    allFiles.push(
      ...examplesFiles.filter(
        (file) => !file.endsWith('.md') && !path.basename(file).startsWith('.')
      )
    );
  }

  // 扫描navigation目录
  if (fs.existsSync(NAVIGATION_DIR)) {
    const navigationFiles = getAllFiles(NAVIGATION_DIR);
    allFiles.push(
      ...navigationFiles.filter(
        (file) => !file.endsWith('.md') && !path.basename(file).startsWith('.')
      )
    );
  }

  // 按目录和基名分组文件
  const groupedFiles = groupFilesByBaseName(allFiles);

  // 为每个分组生成文档并更新索引
  for (const [groupPath, baseNameGroups] of Object.entries(groupedFiles)) {
    const documents = [];

    for (const [baseName, files] of Object.entries(baseNameGroups)) {
      // 生成文档
      const docInfo = generateMarkdown(groupPath, baseName, files);
      documents.push(docInfo);
    }

    // 更新目录索引
    updateIndexFile(groupPath, documents);
  }

  // 生成所有目录的索引文件
  generateDirectoryIndexes();
  
  // 更新侧边栏配置
  updateSidebarConfig();

  console.log('✅ 文档生成完成！');
}

// 执行主函数
main();
