# 员工管理系统

## Python 示例

以下是Python中员工管理系统的示例代码：

```py
# title: 员工管理系统
# 创建一个简单的员工管理系统类，这个类将允许我们添加员工、删除员工、更新员工信息以及列出所有员工的信息。每个员工将有一个唯一的ID、姓名和职位。
class EmployeeManagementSystem:
    def __init__(self):
        self.employees = {}
    
    def add_employee(self, id, name, position):
        if id in self.employees:
            raise ValueError("Employee ID already exists")
        self.employees[id] = {"name": name, "position": position}

    def delete_employee(self, id):
        if id not in self.employees:
            raise ValueError("Employee ID does not exist")
        del self.employees[id]

    def update_employee(self, id, name=None, position=None):
        if id not in self.employees:
            raise ValueError("Employee ID does not exist")
        if name:
            self.employees[id]["name"] = name
        if position:
            self.employees[id]["position"] = position

    def list_employees(self):
        return self.employees
```

## 说明

该示例展示了不同语言中员工管理系统的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
