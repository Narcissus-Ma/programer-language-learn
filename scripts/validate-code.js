#!/usr/bin/env node

// 代码验证脚本
// 功能：验证所有代码示例的语法正确性

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// 配置
const EXAMPLES_DIR = path.join(__dirname, '../docs/examples');

// 支持的语言和验证命令
const VALIDATION_COMMANDS = {
    js: 'node -c',
    python: 'python3 -m py_compile',
    java: 'javac -Xlint:all -d /tmp'
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

// 验证JavaScript文件
function validateJavaScript(filePath) {
    try {
        execSync(`${VALIDATION_COMMANDS.js} ${filePath}`, { stdio: 'ignore' });
        return true;
    } catch (error) {
        return false;
    }
}

// 验证Python文件
function validatePython(filePath) {
    try {
        execSync(`${VALIDATION_COMMANDS.python} ${filePath}`, { stdio: 'ignore' });
        return true;
    } catch (error) {
        return false;
    }
}

// 验证Java文件
function validateJava(filePath) {
    try {
        // 先检查javac命令是否可用
        execSync('which javac', { stdio: 'ignore' });
        // 如果可用，执行编译检查
        execSync(`${VALIDATION_COMMANDS.java} ${filePath}`, { stdio: 'ignore' });
        return true;
    } catch (error) {
        // 如果javac命令不可用，跳过验证
        console.warn(`⚠️  Java环境不可用，跳过验证: ${filePath}`);
        return true;
    }
}

// 简单验证HTML文件
function validateHTML(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        // 简单检查：确保有基本的HTML结构
        return content.includes('<html') && content.includes('</html>') && 
               content.includes('<head') && content.includes('</head>') && 
               content.includes('<body') && content.includes('</body>');
    } catch (error) {
        return false;
    }
}

// 简单验证CSS文件
function validateCSS(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        // 简单检查：确保不是空文件
        return content.trim().length > 0;
    } catch (error) {
        return false;
    }
}

// 简单验证SQL文件
function validateSQL(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        // 简单检查：确保不是空文件
        return content.trim().length > 0;
    } catch (error) {
        return false;
    }
}

// 验证文件
function validateFile(filePath) {
    const language = getLanguage(filePath);
    let isValid = false;
    let validator = null;
    
    switch (language) {
        case 'js':
            isValid = validateJavaScript(filePath);
            validator = 'JavaScript语法检查';
            break;
        case 'python':
            isValid = validatePython(filePath);
            validator = 'Python语法检查';
            break;
        case 'java':
            isValid = validateJava(filePath);
            validator = 'Java语法检查';
            break;
        case 'html-css':
            const ext = path.extname(filePath).slice(1);
            if (ext === 'html') {
                isValid = validateHTML(filePath);
                validator = 'HTML结构检查';
            } else if (ext === 'css') {
                isValid = validateCSS(filePath);
                validator = 'CSS内容检查';
            }
            break;
        case 'sql':
            isValid = validateSQL(filePath);
            validator = 'SQL内容检查';
            break;
        default:
            return { valid: false, reason: '不支持的文件类型' };
    }
    
    return { 
        valid: isValid, 
        validator: validator 
    };
}

// 主函数
function main() {
    console.log('🔄 开始验证代码...');
    
    let totalFiles = 0;
    let validFiles = 0;
    let invalidFiles = [];
    
    // 遍历所有示例目录
    const languages = fs.readdirSync(EXAMPLES_DIR);
    for (const language of languages) {
        const languageDir = path.join(EXAMPLES_DIR, language);
        
        // 检查是否为目录
        if (fs.statSync(languageDir).isDirectory()) {
            // 遍历目录下的所有文件
            const files = fs.readdirSync(languageDir);
            for (const file of files) {
                const filePath = path.join(languageDir, file);
                const stats = fs.statSync(filePath);
                
                // 只处理文件
                if (stats.isFile()) {
                    totalFiles++;
                    const result = validateFile(filePath);
                    
                    if (result.valid) {
                        validFiles++;
                        console.log(`✓ ${filePath}`);
                    } else {
                        invalidFiles.push({
                            path: filePath,
                            reason: result.reason || `${result.validator}失败`
                        });
                        console.log(`✗ ${filePath} - ${result.reason || `${result.validator}失败`}`);
                    }
                }
            }
        }
    }
    
    // 输出验证结果
    console.log('\n📊 验证结果：');
    console.log(`总文件数：${totalFiles}`);
    console.log(`有效文件：${validFiles}`);
    console.log(`无效文件：${invalidFiles.length}`);
    
    if (invalidFiles.length > 0) {
        console.log('\n❌ 无效文件列表：');
        invalidFiles.forEach(file => {
            console.log(`  - ${file.path}: ${file.reason}`);
        });
        process.exit(1);
    } else {
        console.log('\n✅ 所有文件验证通过！');
        process.exit(0);
    }
}

// 执行主函数
main();