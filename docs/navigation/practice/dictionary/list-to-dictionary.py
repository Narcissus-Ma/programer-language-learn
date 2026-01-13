# title: list 转换为字典
keys = ['name', 'age', 'city']
values = ['Alice', 25, 'New York']

# 使用 zip 函数将两个列表合并成字典
my_dict = dict(zip(keys, values))

print(my_dict)