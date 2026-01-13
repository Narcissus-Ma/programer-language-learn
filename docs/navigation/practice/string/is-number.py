# title: 检查一个字符串是否是数字
def is_number(s):
    try:
        float(s)
        return True
    except ValueError:
        pass
    try:
        import unicodedata
        unicodedata.numeric(s)
        return True
    except (TypeError, ValueError):
        pass
    return False

print(is_number('123'))
print(is_number('123.456'))
print(is_number('-123.456'))
