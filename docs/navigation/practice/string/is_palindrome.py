# title: 检查一个字符串是否是回文
def is_palindrome(string):
    return string == string[::-1]

def main():
    string = "racecar"
    print(is_palindrome(string))

if __name__ == '__main__':
    main()