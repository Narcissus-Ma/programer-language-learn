# title: 获取字符串的所有前缀
def get_all_prefixs(string):
    return [string[:i] for i in range(1, len(string) + 1)]

print(get_all_prefixs("hello"))
