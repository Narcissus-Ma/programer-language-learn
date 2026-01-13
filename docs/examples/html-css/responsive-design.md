# 响应式设计 */

## HTML/CSS 示例

以下是HTML/CSS中响应式设计 */的示例代码：

```css
/* title: 响应式设计 */
/* 1. 媒体查询断点设置 */
/* 移动设备优先设计 */

/* 基础样式 - 适用于所有设备 */
body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* 2. 响应式导航栏 */
nav {
    background-color: #2c3e50;
    color: white;
    padding: 10px 0;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 24px;
    font-weight: bold;
}

/* 桌面导航菜单 */
.nav-menu {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-menu li {
    margin-left: 20px;
}

.nav-menu a {
    color: white;
    text-decoration: none;
    padding: 8px 12px;
    border-radius: 4px;
    transition: background-color 0.3s;
}

.nav-menu a:hover {
    background-color: #34495e;
}

/* 移动端汉堡菜单 */
.hamburger {
    display: none;
    font-size: 24px;
    cursor: pointer;
}

/* 3. 响应式网格布局 */
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin: 20px 0;
}

.grid-item {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* 4. 响应式图片 */
img {
    max-width: 100%;
    height: auto;
    display: block;
}

/* 5. 响应式表单 */
form {
    max-width: 600px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input, textarea, select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}

button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #2980b9;
}

/* 6. 响应式排版 */
h1 {
    font-size: 2.5rem;
    text-align: center;
    margin: 20px 0;
}

h2 {
    font-size: 2rem;
    margin: 15px 0;
}

h3 {
    font-size: 1.5rem;
    margin: 10px 0;
}

p {
    font-size: 1rem;
    margin: 10px 0;
}

/* 7. 媒体查询 - 平板设备 (768px以下) */
@media (max-width: 768px) {
    h1 {
        font-size: 2rem;
    }
    
    h2 {
        font-size: 1.5rem;
    }
    
    h3 {
        font-size: 1.25rem;
    }
    
    /* 移动端导航菜单 */
    .hamburger {
        display: block;
    }
    
    .nav-menu {
        position: absolute;
        top: 60px;
        left: 0;
        width: 100%;
        background-color: #2c3e50;
        flex-direction: column;
        align-items: center;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s, visibility 0.3s;
        z-index: 1000;
    }
    
    .nav-menu.active {
        opacity: 1;
        visibility: visible;
    }
    
    .nav-menu li {
        margin: 15px 0;
    }
    
    /* 移动端网格布局 */
    .grid-container {
        grid-template-columns: 1fr;
        gap: 15px;
    }
    
    /* 移动端表单 */
    input, textarea, select {
        padding: 8px;
        font-size: 14px;
    }
}

/* 8. 媒体查询 - 手机设备 (480px以下) */
@media (max-width: 480px) {
    h1 {
        font-size: 1.75rem;
    }
    
    h2 {
        font-size: 1.25rem;
    }
    
    .container {
        padding: 0 15px;
    }
    
    .grid-item {
        padding: 15px;
    }
}

/* 9. 响应式表格 */
.table-container {
    overflow-x: auto;
    margin: 20px 0;
}

table {
    width: 100%;
    border-collapse: collapse;
    background-color: white;
}

th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

th {
    background-color: #f2f2f2;
    font-weight: bold;
}

/* 10. 打印样式 */
@media print {
    body {
        background-color: white;
        color: black;
    }
    
    nav {
        display: none;
    }
    
    .container {
        max-width: none;
        padding: 0;
    }
    
    .grid-container {
        grid-template-columns: 1fr 1fr;
    }
}
```

## 说明

该示例展示了不同语言中响应式设计 */的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
