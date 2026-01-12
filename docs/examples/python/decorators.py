# 装饰器示例

# 1. 基本装饰器
# 装饰器函数
def my_decorator(func):
    def wrapper():
        print("装饰器开始执行")
        func()
        print("装饰器结束执行")
    return wrapper

# 使用装饰器
@my_decorator
def say_hello():
    print("Hello, World!")

print("基本装饰器示例:")
say_hello()

# 2. 带参数的装饰器

def with_params_decorator(prefix):
    def decorator(func):
        def wrapper(*args, **kwargs):
            print(f"{prefix} 装饰器开始")
            result = func(*args, **kwargs)
            print(f"{prefix} 装饰器结束")
            return result
        return wrapper
    return decorator

@with_params_decorator("======")
def add(a, b):
    return a + b

print("\n带参数的装饰器示例:")
result = add(3, 5)
print(f"3 + 5 = {result}")

# 3. 保留原始函数信息
import functools

def my_decorator2(func):
    @functools.wraps(func)  # 保留原始函数信息
    def wrapper(*args, **kwargs):
        print("装饰器2开始")
        result = func(*args, **kwargs)
        print("装饰器2结束")
        return result
    return wrapper

@my_decorator2
def original_func():
    """这是原始函数的文档字符串"""
    print("原始函数执行")

print("\n保留原始函数信息示例:")
original_func()
print(f"函数名称: {original_func.__name__}")
print(f"函数文档: {original_func.__doc__}")

# 4. 装饰器链（多个装饰器）

def decorator1(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print("装饰器1执行")
        return func(*args, **kwargs)
    return wrapper

def decorator2(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print("装饰器2执行")
        return func(*args, **kwargs)
    return wrapper

@decorator1
@decorator2
def chained_func():
    print("被装饰的函数执行")

print("\n装饰器链示例:")
chained_func()

# 5. 类装饰器
class ClassDecorator:
    def __init__(self, func):
        self.func = func
    
    def __call__(self, *args, **kwargs):
        print("类装饰器开始")
        result = self.func(*args, **kwargs)
        print("类装饰器结束")
        return result

@ClassDecorator
def say_goodbye():
    print("Goodbye!")

print("\n类装饰器示例:")
say_goodbye()

# 6. 带参数的类装饰器
class ClassDecoratorWithParams:
    def __init__(self, prefix, suffix):
        self.prefix = prefix
        self.suffix = suffix
    
    def __call__(self, func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            print(f"{self.prefix} 类装饰器开始")
            result = func(*args, **kwargs)
            print(f"{self.suffix} 类装饰器结束")
            return result
        return wrapper

@ClassDecoratorWithParams("【开始】", "【结束】")
def multiply(a, b):
    return a * b

print("\n带参数的类装饰器示例:")
result = multiply(4, 6)
print(f"4 * 6 = {result}")

# 7. 装饰器用于计时
def timer_decorator(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        import time
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        execution_time = end_time - start_time
        print(f"函数 {func.__name__} 执行时间: {execution_time:.4f} 秒")
        return result
    return wrapper

@timer_decorator
def slow_function():
    import time
    time.sleep(1)  # 模拟耗时操作
    print("慢速函数执行完成")

print("\n计时装饰器示例:")
slow_function()