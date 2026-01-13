# title: 查找一个数的所有因子
def find_factors(num):
    return [i for i in range(1, num+1) if num % i == 0]

print(find_factors(12))