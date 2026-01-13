# title: 查找符合条件的元素
def find_elements_by_condition(elements, condition):
    return [element for element in elements if condition(element)]

def is_even(number):
    return number % 2 == 0

def is_odd(number):
    return number % 2 != 0

even_numbers = find_elements_by_condition([1, 2, 3, 4, 5, 6], is_even)
print(even_numbers)

odd_numbers = find_elements_by_condition([1, 2, 3, 4, 5, 6], is_odd)
print(odd_numbers)