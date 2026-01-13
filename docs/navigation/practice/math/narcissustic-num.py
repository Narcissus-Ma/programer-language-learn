# title: Narcissistic 数
def is_narcissistic_number(num):
    num_str = str(num)
    num_len = len(num_str)
    return num == sum(int(digit)**num_len for digit in num_str)
#  Narcissistic 数是指一个数，它的每个位上的数字的立方和等于它本身。
# 例如，153 是一个 Narcissistic 数，因为 1^3 + 5^3 + 3^3 = 153。
print(is_narcissistic_number(153))
print(is_narcissistic_number(370))
print(is_narcissistic_number(9474))
print(is_narcissistic_number(123))