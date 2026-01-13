# Armstrong 数
# Armstrong 数（也称为自幂数）是指一个 n 位数，它的每个位上的数字的 n 次幂之和等于它本身。例如，153 是一个 Armstrong 数，因为 1^3 + 5^3 + 3^3 = 153。
num = 153
 
# 初始化变量 sum
sum = 0
# 指数
n = len(str(num))
 
# 检测
temp = num
while temp > 0:
   digit = temp % 10
   sum += digit ** n
   temp //= 10
 
# 输出结果
if num == sum:
   print(num,"是阿姆斯特朗数")
else:
   print(num,"不是阿姆斯特朗数")