# title: 移除指定位置的字符
test_str = "hello world"

def remove_char_at_index_1(str, index):
    return str[:index] + str[index+1:]

def remove_char_at_index_2(str, index):
    new_str = ""
    for i in range(len(str)):
        if i != index:
            new_str += str[i]
    return new_str

def remove_char_at_index_3(str, index):
    return str.replace(str[index], "")

print(remove_char_at_index_1(test_str, 5))
print(remove_char_at_index_2(test_str, 5))
print(remove_char_at_index_3(test_str, 5))
