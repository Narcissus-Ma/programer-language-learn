# title: 列表去重
def find_duplicates(lst):
    seen = set()
    duplicates = set()
    for item in lst:
        if item in seen:
            duplicates.add(item)
        else:
            seen.add(item)
    return list(duplicates)

# 示例列表
my_list = [1, 2, 3, 2, 4, 5, 3, 6, 7, 8, 7]
print(find_duplicates(my_list))