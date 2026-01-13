# title: clone列表
original_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

def clone_list_1(lst):
    li_copy = lst[:]
    return li_copy

def clone_list_2(lst):
    li_copy = []
    li_copy.extend(lst)
    return li_copy

def clone_list_3(lst):
    li_copy = list(lst)
    return li_copy

def clone_list_4(lst):
    li_copy = lst.copy()
    return li_copy

print(clone_list_1(original_list))
print(clone_list_2(original_list))
print(clone_list_3(original_list))
print(clone_list_4(original_list))
