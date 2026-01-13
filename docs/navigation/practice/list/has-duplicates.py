# title: 检查列表是否有重复元素
def has_duplicates(lst):
    return len(lst) != len(set(lst))

def main():
    lst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]
    print(has_duplicates(lst))

if __name__ == '__main__':
    main()