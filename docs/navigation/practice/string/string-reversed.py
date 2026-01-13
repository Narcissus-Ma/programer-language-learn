# title: 字符串反转
ori_str = "hello world"
def reverse_string_1(str):
    return str[::-1]

def reverse_string_2(str):
    new_str = ""
    for i in range(len(str)):
        new_str += str[len(str)-1-i]
    return new_str

def reverse_string_3(str):
    return "".join(reversed(str))

print(reverse_string_1(ori_str))
print(reverse_string_2(ori_str))
print(reverse_string_3(ori_str))