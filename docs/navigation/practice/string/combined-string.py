# title: 合并多个字符串
str1 = "hello"
str2 = "world"
str3 = "!"

def combined_string_1(str1, str2, str3):
    return str1 + str2 + str3

def combined_string_2(str1, str2, str3):
    return "".join([str1, str2, str3])

def combined_string_3(str1, str2, str3):
    return f"{str1}{str2}{str3}"

print(combined_string_1(str1, str2, str3))
print(combined_string_2(str1, str2, str3))
print(combined_string_3(str1, str2, str3))