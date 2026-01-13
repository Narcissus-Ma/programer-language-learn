# title: list的map与filter方法
number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

even_number = list(filter(lambda x: x % 2 == 0, number))
# doubled_even_numbers = list(map(lambda x: x * 2, even_number))
doubled_even_numbers = map(lambda x: x * 2, even_number)
print(list(doubled_even_numbers))
