# title: 随机数
import random

# o到1之间
print(random.random())

# 1到10之间
print(random.randint(1,10))

# 选择一个元素
print(random.choice(['Kung Pao Chicken', 'Fish-flavored Shredded Pork', 'Braised Pork', 'Sweet and Sour Pork Fillet', 'Boiled Fish in Spicy Sauce', 'Mapo Tofu', 'Fish-flavored Eggplant', 'Braised Eggplant', 'Hot and Sour Shredded Potatoes', 'Steamed Sea Bass']))

# 排序
array = [1,2,3,4,5,6,7,8,9,10]
random.shuffle(array)
print(array)
