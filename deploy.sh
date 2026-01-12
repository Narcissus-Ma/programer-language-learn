#!/bin/bash

echo "🔄 开始部署..."

# 1. 构建生产版本
echo "📦 构建生产版本..."
pnpm run build

if [ $? -ne 0 ]; then
  echo "❌ 构建失败！"
  exit 1
fi

echo "✅ 构建成功！"

# 2. 部署到GitHub Pages
echo "🚀 部署到GitHub Pages..."

# 使用gh-pages包部署静态文件
pnpm exec gh-pages -d docs/.vitepress/dist

if [ $? -ne 0 ]; then
  echo "❌ 部署失败！"
  exit 1
fi

echo "✅ 部署完成！"
echo "🌐 访问地址: https://narcissus-ma.github.io/programer-language-learn/"
echo "📝 注意：首次部署可能需要等待几分钟才能生效"
