# title: 计算一个数的立方和
def sum_of_series(n):
    # sum = 0
    # for i in range(1, n+1):
    #     sum += i**3
    # return sum
    return sum(i**3 for i in range(1, n+1))

print(sum_of_series(5))