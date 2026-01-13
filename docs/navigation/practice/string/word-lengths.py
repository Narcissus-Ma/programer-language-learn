# title: 计算字符串中每个单词的长度
def word_lengths(str):
    return {word: len(word) for word in str.split()}

# 测试
print(word_lengths("apple banana cherry"))  # {'apple': 5, 'banana': 6, 'cherry': 6}
