#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 配置选项
const config = {
  docsDir: path.join(__dirname, '../docs'), // 文档根目录
  backupDir: path.join(__dirname, '../docs-backup'), // 备份目录
  fileExtensions: ['.md'], // 需要检查的文件扩展名
  maxFileSize: 50 * 1024 * 1024, // 最大文件大小 (50MB)
  encoding: 'utf8', // 文件编码
};

// 无效文件列表
const invalidFiles = [];

/**
 * 检查文件是否为有效的文本文件
 * @param {string} filePath - 文件路径
 * @returns {boolean} - 是否为有效文件
 */
function isValidTextFile(filePath) {
  try {
    // 检查文件大小
    const stats = fs.statSync(filePath);
    if (stats.size === 0) {
      console.log(`❌ 空文件: ${filePath}`);
      return false;
    }
    
    if (stats.size > config.maxFileSize) {
      console.log(`❌ 文件过大: ${filePath} (${Math.round(stats.size / 1024)}KB)`);
      return false;
    }
    
    // 尝试读取文件内容
    const content = fs.readFileSync(filePath, { encoding: config.encoding, flag: 'r' });
    
    // 检查是否包含非文本内容
    const binaryRegex = /[\x00-\x08\x0B\x0C\x0E-\x1F]/;
    if (binaryRegex.test(content)) {
      console.log(`❌ 包含二进制内容: ${filePath}`);
      return false;
    }
    
    // 检查是否为有效的Markdown（简单检查）
    if (filePath.endsWith('.md')) {
      // 至少应该包含一些基本的文本内容
      if (content.trim().length === 0) {
        console.log(`❌ 空的Markdown文件: ${filePath}`);
        return false;
      }
    }
    
    return true;
  } catch (error) {
    console.log(`❌ 读取错误: ${filePath} (${error.message})`);
    return false;
  }
}

/**
 * 递归遍历目录并检查文件
 * @param {string} dirPath - 目录路径
 */
function scanDirectory(dirPath) {
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const itemPath = path.join(dirPath, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        // 递归遍历子目录
        scanDirectory(itemPath);
      } else if (stats.isFile()) {
        // 检查文件扩展名
        if (config.fileExtensions.some(ext => itemPath.endsWith(ext))) {
          if (!isValidTextFile(itemPath)) {
            invalidFiles.push(itemPath);
          }
        }
      }
    }
  } catch (error) {
    console.error(`❌ 遍历目录错误: ${dirPath} (${error.message})`);
  }
}

/**
 * 备份文件
 * @param {string} filePath - 文件路径
 */
function backupFile(filePath) {
  try {
    // 创建备份目录（保持原始目录结构）
    const relativePath = path.relative(config.docsDir, filePath);
    const backupPath = path.join(config.backupDir, relativePath);
    const backupDir = path.dirname(backupPath);
    
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    
    // 复制文件到备份目录
    fs.copyFileSync(filePath, backupPath);
    console.log(`✅ 已备份: ${filePath} -> ${backupPath}`);
  } catch (error) {
    console.error(`❌ 备份失败: ${filePath} (${error.message})`);
    return false;
  }
  return true;
}

/**
 * 删除文件
 * @param {string} filePath - 文件路径
 */
function deleteFile(filePath) {
  try {
    fs.unlinkSync(filePath);
    console.log(`✅ 已删除: ${filePath}`);
  } catch (error) {
    console.error(`❌ 删除失败: ${filePath} (${error.message})`);
    return false;
  }
  return true;
}

/**
 * 清理无效文件
 * @param {boolean} backupFirst - 是否先备份
 */
function cleanInvalidFiles(backupFirst = true) {
  console.log(`
🧹 开始清理无效文件...`);
  console.log(`📁 文档目录: ${config.docsDir}`);
  
  if (backupFirst) {
    console.log(`💾 备份目录: ${config.backupDir}`);
    
    // 创建备份目录
    if (!fs.existsSync(config.backupDir)) {
      fs.mkdirSync(config.backupDir, { recursive: true });
    }
  }
  
  let successCount = 0;
  let failureCount = 0;
  
  for (const filePath of invalidFiles) {
    let success = true;
    
    if (backupFirst) {
      success = backupFile(filePath);
    }
    
    if (success) {
      success = deleteFile(filePath);
    }
    
    if (success) {
      successCount++;
    } else {
      failureCount++;
    }
  }
  
  console.log(`
📊 清理完成:`);
  console.log(`✅ 成功清理: ${successCount} 个文件`);
  console.log(`❌ 清理失败: ${failureCount} 个文件`);
  console.log(`📁 总无效文件: ${invalidFiles.length} 个`);
}

/**
 * 显示帮助信息
 */
function showHelp() {
  console.log('📝 文档清理脚本');
  console.log('用法: node scripts/clean-invalid-docs.js [选项]');
  console.log('');
  console.log('选项:');
  console.log('  --scan       只扫描无效文件，不清理');
  console.log('  --clean      扫描并清理无效文件（默认会先备份）');
  console.log('  --no-backup  清理时不备份文件');
  console.log('  --help       显示帮助信息');
  console.log('');
  console.log('示例:');
  console.log('  node scripts/clean-invalid-docs.js --scan');
  console.log('  node scripts/clean-invalid-docs.js --clean');
  console.log('  node scripts/clean-invalid-docs.js --clean --no-backup');
}

/**
 * 主函数
 */
function main() {
  const args = process.argv.slice(2);
  
  // 解析命令行参数
  if (args.includes('--help')) {
    showHelp();
    return;
  }
  
  const scanOnly = args.includes('--scan');
  const cleanFiles = args.includes('--clean');
  const noBackup = args.includes('--no-backup');
  
  console.log('🔍 开始扫描无效文档...');
  console.log(`📁 扫描目录: ${config.docsDir}`);
  
  // 开始扫描
  scanDirectory(config.docsDir);
  
  console.log(`
📊 扫描结果:`);
  console.log(`✅ 有效文件: 未显示`);
  console.log(`❌ 无效文件: ${invalidFiles.length} 个`);
  
  if (invalidFiles.length > 0) {
    console.log('\n📋 无效文件列表:');
    invalidFiles.forEach(file => {
      console.log(`   - ${file}`);
    });
    
    if (scanOnly) {
      console.log('\n📌 提示: 使用 --clean 选项清理这些文件');
    } else if (cleanFiles) {
      // 清理文件
      cleanInvalidFiles(!noBackup);
    } else {
      // 询问用户是否清理
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      rl.question('\n🤔 是否清理这些无效文件？(y/n): ', (answer) => {
        rl.close();
        
        if (answer.toLowerCase() === 'y' || answer.toLowerCase() === 'yes') {
          cleanInvalidFiles(true);
        } else {
          console.log('\n✅ 已取消清理操作');
        }
      });
    }
  } else {
    console.log('\n🎉 未发现无效文件！');
  }
}

// 执行主函数
main();
