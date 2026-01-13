# 简单学生成绩管理系统

## Python 示例

以下是Python中简单学生成绩管理系统的示例代码：

```py
# title: 简单学生成绩管理系统
# 实现一个简单的学生成绩管理系统。这个系统将允许我们添加学生、记录他们的成绩，并计算每个学生的平均成绩。

class Students:
    def __init__(self,name):
        self.name = name
        self.grades = []

    def add_grade(self,grade):
        self.grades.append(grade)
        
    def calculate_average(self):
        if not self.grades:
            return 0
        return sum(self.grades) / len(self.grades) if self.grades else 0

    def __str__(self):
        return f"Student: {self.name}, Grades: {self.grades}, Average: {self.calculate_average():.2f}"

class StudentGradeManagement:
    def __init__(self):
        self.students = []
    
    def add_student(self,student):
        self.students.append(student)
        
    def get_student(self,name):
        for student in self.students:
            if student.name == name:
                return student
        raise ValueError("Student not found")

    def add_grade(self,name,grade):
        student = self.get_student(name)
        student.add_grade(grade) if student else print(f"Student {name} not found.")
    
    def show_average_grade(self,name):
        for student in self.students:
            print(f"{student.name}'s average grade is {student.average_grade():.2f}")

```

## 说明

该示例展示了不同语言中简单学生成绩管理系统的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../index.md)
