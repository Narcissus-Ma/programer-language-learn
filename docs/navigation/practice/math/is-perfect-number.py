# title: 检查一个数是否是完全数
# 完全数是指一个数等于它的所有真因子（除了自身以外的因子）之和。例如，6 是一个完全数，因为它的真因子是 1, 2, 3，而 1 + 2 + 3 = 6。
def is_perfect_number(number):
    if number < 1:
        return False
    factors = [i for i in range(1, number) if number % i == 0]
    return sum(factors) == number