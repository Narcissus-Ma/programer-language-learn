# 文件操作

## Python 示例

以下是Python中文件操作的示例代码：

```py
# title: 文件操作
# 1. 写入文件
# 1.1 使用write()方法写入单行
with open('example.txt', 'w', encoding='utf-8') as f:
    f.write('这是第一行内容\n')
    f.write('这是第二行内容\n')
    f.write('这是第三行内容\n')

# 1.2 使用writelines()方法写入多行
lines = ['这是第四行内容\n', '这是第五行内容\n', '这是第六行内容\n']
with open('example.txt', 'a', encoding='utf-8') as f:
    f.writelines(lines)

# 2. 读取文件
# 2.1 读取整个文件
with open('example.txt', 'r', encoding='utf-8') as f:
    content = f.read()
    print('读取整个文件内容:')
    print(content)

# 2.2 逐行读取
print('\n逐行读取:')
with open('example.txt', 'r', encoding='utf-8') as f:
    for line in f:
        print(line.strip())  # strip()移除换行符和空格

# 2.3 读取所有行到列表
with open('example.txt', 'r', encoding='utf-8') as f:
    lines = f.readlines()
    print('\n读取所有行到列表:')
    print(lines)

# 3. 文件路径操作
import os

# 3.1 获取当前工作目录
current_dir = os.getcwd()
print('\n当前工作目录:', current_dir)

# 3.2 拼接文件路径
file_path = os.path.join(current_dir, 'example.txt')
print('文件完整路径:', file_path)

# 3.3 检查文件是否存在
if os.path.exists(file_path):
    print('文件存在')
else:
    print('文件不存在')

# 3.4 获取文件大小
file_size = os.path.getsize(file_path)
print('文件大小:', file_size, '字节')

# 4. 上下文管理器
class FileManager:
    def __init__(self, file_path, mode='r'):
        self.file_path = file_path
        self.mode = mode
    
    def __enter__(self):
        self.file = open(self.file_path, self.mode, encoding='utf-8')
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.file.close()

# 使用自定义上下文管理器
print('\n使用自定义上下文管理器读取文件:')
with FileManager('example.txt') as f:
    content = f.read()
    print(content)

# 5. JSON文件操作
import json

# 5.1 写入JSON文件
user_data = {
    'name': '张三',
    'age': 30,
    'email': 'zhangsan@example.com',
    'hobbies': ['编程', '阅读', '运动']
}

with open('user.json', 'w', encoding='utf-8') as f:
    json.dump(user_data, f, ensure_ascii=False, indent=2)

# 5.2 读取JSON文件
with open('user.json', 'r', encoding='utf-8') as f:
    loaded_data = json.load(f)
    print('\n读取JSON文件:')
    print(loaded_data)
    print('姓名:', loaded_data['name'])
    print('爱好:', loaded_data['hobbies'])
```

## 说明

该示例展示了不同语言中文件操作的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
