# 贡献指南

感谢您考虑为这个项目做出贡献！以下是一些贡献指南，帮助您顺利参与项目开发。

## 如何贡献

### 1. 报告问题

如果您发现了bug或有改进建议，请在GitHub Issues中提交：

- 提供详细的问题描述
- 包含复现步骤
- 提供相关截图或错误信息
- 说明您使用的环境（操作系统、浏览器等）

### 2. 提交代码

1. **Fork仓库**
   - 在GitHub上Fork这个仓库到您自己的账户

2. **克隆仓库**
   ```bash
   git clone https://gitee.com/your-username/programer-language-learn.git
   cd programer-language-learn
   ```

3. **创建分支**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **安装依赖**
   ```bash
   npm install
   ```

5. **开发和测试**
   - 编写代码
   - 运行测试
   ```bash
   npm run validate:code
   ```
   - 本地预览
   ```bash
   npm run dev
   ```

6. **提交更改**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

7. **推送到远程仓库**
   ```bash
   git push origin feature/your-feature-name
   ```

8. **创建Pull Request**
   - 在GitHub上创建Pull Request
   - 提供详细的更改说明
   - 引用相关的Issue（如果有）

## 贡献规范

### 代码规范

- 遵循项目现有的代码风格
- 使用有意义的变量和函数名称
- 添加必要的注释
- 确保代码通过所有测试

### 文档规范

- 为新功能添加文档
- 使用清晰、简洁的语言
- 保持文档的一致性
- 为代码示例添加说明

### 提交信息规范

使用以下前缀来标记提交信息：

- `feat`: 新功能
- `fix`: 修复bug
- `docs`: 文档更改
- `style`: 代码风格更改
- `refactor`: 代码重构
- `test`: 添加或修改测试
- `chore`: 构建或工具相关的更改

## 代码示例贡献

如果您想添加新的代码示例，请遵循以下步骤：

1. 在`docs/examples/`目录下创建相应语言的子目录（如果不存在）
2. 在子目录中创建代码文件，使用kebab-case命名方式
3. 确保代码示例是完整的、可运行的
4. 添加必要的注释说明
5. 运行`npm run generate:docs`生成相应的Markdown文档
6. 更新相关的对比文档（如果适用）

## 社区行为准则

- 尊重所有贡献者
- 保持开放和包容的态度
- 接受建设性的批评
- 关注问题本身，而不是人身攻击

## 联系我们

如有任何问题或建议，请通过以下方式联系：

- GitHub Issues: https://gitee.com/Narcissus-ma/programer-language-learn/issues

感谢您的贡献！