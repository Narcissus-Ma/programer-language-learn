# title: 检查一个字符串是否包含数字
def contains_number(s):
    return any(char.isdigit() for char in s)

# 测试
test_string = "Hello123"
if contains_number(test_string):
    print("字符串包含数字")
else:
    print("字符串不包含数字")