# grid layout

## HTML/CSS 示例

以下是HTML/CSS中grid layout的示例代码：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <!-- title: Grid布局 -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid布局示例</title>
    <style>
        /* 基础样式重置 */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        h1 {
            text-align: center;
            margin-bottom: 30px;
            color: #2c3e50;
        }
        
        .example {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
            margin-bottom: 30px;
        }
        
        h2 {
            margin-bottom: 15px;
            color: #3498db;
            font-size: 20px;
        }
        
        h3 {
            margin: 15px 0 10px;
            color: #2ecc71;
            font-size: 16px;
        }
        
        /* Grid容器样式 */
        .grid-container {
            display: grid;
            background-color: #ecf0f1;
            border-radius: 4px;
            margin-bottom: 10px;
            gap: 10px;
            padding: 10px;
        }
        
        /* Grid项目样式 */
        .grid-item {
            background-color: #3498db;
            color: white;
            padding: 20px;
            text-align: center;
            border-radius: 4px;
        }
        
        /* 示例1: 基本Grid布局 */
        .grid-basic {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto auto;
        }
        
        /* 示例2: 不同的列宽设置 */
        .grid-columns {
            grid-template-columns: 100px 200px 1fr 2fr;
        }
        
        /* 示例3: 网格行设置 */
        .grid-rows {
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 100px 200px 150px;
        }
        
        /* 示例4: 网格间距 */
        .grid-gap {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 20px 30px; /* 行间距 列间距 */
        }
        
        /* 示例5: 网格项定位 */
        .grid-position {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(3, 100px);
        }
        
        .grid-position .item-1 {
            grid-column: 1 / 3;
            grid-row: 1 / 2;
            background-color: #e74c3c;
        }
        
        .grid-position .item-2 {
            grid-column: 3 / 5;
            grid-row: 1 / 3;
            background-color: #2ecc71;
        }
        
        .grid-position .item-3 {
            grid-column: 1 / 2;
            grid-row: 2 / 4;
            background-color: #f39c12;
        }
        
        .grid-position .item-4 {
            grid-column: 2 / 4;
            grid-row: 3 / 4;
            background-color: #9b59b6;
        }
        
        .grid-position .item-5 {
            grid-column: 4 / 5;
            grid-row: 3 / 4;
            background-color: #1abc9c;
        }
        
        /* 示例6: 网格区域 */
        .grid-areas {
            grid-template-columns: 1fr 3fr;
            grid-template-rows: auto 1fr auto;
            grid-template-areas: 
                "header header"
                "sidebar main"
                "footer footer";
            height: 400px;
        }
        
        .grid-areas .header {
            grid-area: header;
            background-color: #e74c3c;
        }
        
        .grid-areas .sidebar {
            grid-area: sidebar;
            background-color: #3498db;
        }
        
        .grid-areas .main {
            grid-area: main;
            background-color: #2ecc71;
        }
        
        .grid-areas .footer {
            grid-area: footer;
            background-color: #f39c12;
        }
        
        /* 示例7: 响应式网格 */
        .grid-responsive {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
        
        /* 示例8: 网格对齐 */
        .grid-alignment {
            grid-template-columns: repeat(3, 150px);
            grid-template-rows: repeat(2, 100px);
            justify-content: center; /* 水平对齐 */
            align-content: center; /* 垂直对齐 */
            height: 300px;
        }
        
        .grid-alignment .item-1 {
            align-self: start; /* 单个项目垂直对齐 */
            background-color: #e74c3c;
        }
        
        .grid-alignment .item-2 {
            align-self: center; /* 单个项目垂直对齐 */
            background-color: #2ecc71;
        }
        
        .grid-alignment .item-3 {
            align-self: end; /* 单个项目垂直对齐 */
            background-color: #f39c12;
        }
        
        /* 示例9: 网格线命名 */
        .grid-named-lines {
            grid-template-columns: [col-start] 1fr [col-2] 1fr [col-3] 1fr [col-end];
            grid-template-rows: [row-start] auto [row-2] auto [row-end];
        }
        
        .grid-named-lines .item-1 {
            grid-column: col-start / col-3;
            background-color: #e74c3c;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Grid布局示例</h1>
        
        <!-- 示例1: 基本Grid布局 -->
        <div class="example">
            <h2>1. 基本Grid布局</h2>
            <div class="grid-container grid-basic">
                <div class="grid-item">项目1</div>
                <div class="grid-item">项目2</div>
                <div class="grid-item">项目3</div>
                <div class="grid-item">项目4</div>
                <div class="grid-item">项目5</div>
                <div class="grid-item">项目6</div>
            </div>
        </div>
        
        <!-- 示例2: 不同的列宽设置 -->
        <div class="example">
            <h2>2. 不同的列宽设置</h2>
            <div class="grid-container grid-columns">
                <div class="grid-item">固定宽度(100px)</div>
                <div class="grid-item">固定宽度(200px)</div>
                <div class="grid-item">1fr</div>
                <div class="grid-item">2fr</div>
            </div>
        </div>
        
        <!-- 示例3: 网格行设置 -->
        <div class="example">
            <h2>3. 网格行设置</h2>
            <div class="grid-container grid-rows">
                <div class="grid-item">行高100px</div>
                <div class="grid-item">行高200px</div>
                <div class="grid-item">行高150px</div>
            </div>
        </div>
        
        <!-- 示例4: 网格间距 -->
        <div class="example">
            <h2>4. 网格间距</h2>
            <div class="grid-container grid-gap">
                <div class="grid-item">项目1</div>
                <div class="grid-item">项目2</div>
                <div class="grid-item">项目3</div>
                <div class="grid-item">项目4</div>
            </div>
        </div>
        
        <!-- 示例5: 网格项定位 -->
        <div class="example">
            <h2>5. 网格项定位</h2>
            <div class="grid-container grid-position">
                <div class="grid-item item-1">项目1</div>
                <div class="grid-item item-2">项目2</div>
                <div class="grid-item item-3">项目3</div>
                <div class="grid-item item-4">项目4</div>
                <div class="grid-item item-5">项目5</div>
            </div>
        </div>
        
        <!-- 示例6: 网格区域 -->
        <div class="example">
            <h2>6. 网格区域</h2>
            <div class="grid-container grid-areas">
                <div class="grid-item header">Header</div>
                <div class="grid-item sidebar">Sidebar</div>
                <div class="grid-item main">Main Content</div>
                <div class="grid-item footer">Footer</div>
            </div>
        </div>
        
        <!-- 示例7: 响应式网格 -->
        <div class="example">
            <h2>7. 响应式网格</h2>
            <div class="grid-container grid-responsive">
                <div class="grid-item">项目1</div>
                <div class="grid-item">项目2</div>
                <div class="grid-item">项目3</div>
                <div class="grid-item">项目4</div>
                <div class="grid-item">项目5</div>
                <div class="grid-item">项目6</div>
                <div class="grid-item">项目7</div>
                <div class="grid-item">项目8</div>
            </div>
        </div>
        
        <!-- 示例8: 网格对齐 -->
        <div class="example">
            <h2>8. 网格对齐</h2>
            <div class="grid-container grid-alignment">
                <div class="grid-item item-1">顶部对齐</div>
                <div class="grid-item item-2">居中对齐</div>
                <div class="grid-item item-3">底部对齐</div>
                <div class="grid-item">默认对齐</div>
                <div class="grid-item">默认对齐</div>
                <div class="grid-item">默认对齐</div>
            </div>
        </div>
        
        <!-- 示例9: 网格线命名 -->
        <div class="example">
            <h2>9. 网格线命名</h2>
            <div class="grid-container grid-named-lines">
                <div class="grid-item item-1">跨列项目</div>
                <div class="grid-item">项目2</div>
                <div class="grid-item">项目3</div>
                <div class="grid-item">项目4</div>
                <div class="grid-item">项目5</div>
            </div>
        </div>
    </div>
</body>
</html>
```

## 说明

该示例展示了不同语言中grid layout的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
