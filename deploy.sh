#!/bin/bash

echo "🔄 开始部署..."

# 1. 构建生产版本
echo "📦 构建生产版本..."
npm run build

if [ $? -ne 0 ]; then
  echo "❌ 构建失败！"
  exit 1
fi

echo "✅ 构建成功！"

# 2. 部署到GitHub Pages
echo "🚀 部署到GitHub Pages..."

# 检查是否已经有gh-pages分支
if git show-ref --verify --quiet refs/heads/gh-pages; then
  echo "📤 推送更新到gh-pages分支..."
  git checkout gh-pages
  git merge main --no-edit
  git push origin gh-pages
  git checkout main
else
  echo "📱 创建并推送gh-pages分支..."
  git checkout -b gh-pages
  git push -u origin gh-pages
  git checkout main
fi

echo "✅ 部署完成！"
echo "🌐 访问地址: https://narcissus-ma.gitee.io/programer-language-learn/"
echo "📝 注意：首次部署可能需要等待几分钟才能生效"
