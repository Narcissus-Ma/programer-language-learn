# title: 判断字符串是否包含子字符串
test_str = "hello world"

def contains_substring_1(str, substr):
    return substr in str

def contains_substring_2(str, substr):
    return str.find(substr) != -1

print(contains_substring_1(test_str, "world"))
print(contains_substring_2(test_str, "world"))
