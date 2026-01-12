# 泛型

## Java 泛型示例

以下是Java中泛型的示例代码：

```java
// 泛型示例
public class GenericsExample {
    public static void main(String[] args) {
        // 1. 泛型类示例
        System.out.println("1. 泛型类示例：");
        
        // 创建不同类型的Box对象
        Box<String> stringBox = new Box<>();
        stringBox.setContent("Hello, Generics!");
        System.out.println("String Box: " + stringBox.getContent());
        
        Box<Integer> integerBox = new Box<>();
        integerBox.setContent(123);
        System.out.println("Integer Box: " + integerBox.getContent());
        
        Box<Double> doubleBox = new Box<>();
        doubleBox.setContent(3.14159);
        System.out.println("Double Box: " + doubleBox.getContent());
        
        // 2. 泛型接口示例
        System.out.println("\n2. 泛型接口示例：");
        
        // 实现泛型接口
        StringProcessor stringProcessor = new StringProcessor();
        System.out.println("处理后的字符串：" + stringProcessor.process("hello"));
        
        IntegerProcessor integerProcessor = new IntegerProcessor();
        System.out.println("处理后的整数：" + integerProcessor.process(100));
        
        // 3. 泛型方法示例
        System.out.println("\n3. 泛型方法示例：");
        
        // 调用泛型方法
        String[] stringArray = {"Apple", "Banana", "Cherry"};
        Integer[] integerArray = {1, 2, 3, 4, 5};
        Double[] doubleArray = {1.1, 2.2, 3.3};
        
        System.out.print("字符串数组：");
        printArray(stringArray);
        
        System.out.print("整数数组：");
        printArray(integerArray);
        
        System.out.print("双精度数组：");
        printArray(doubleArray);
        
        // 调用泛型方法比较元素
        System.out.println("\n比较元素：");
        System.out.println("两个整数是否相等：" + isEqual(10, 10));
        System.out.println("两个字符串是否相等：" + isEqual("abc", "def"));
        
        // 4. 泛型边界示例
        System.out.println("\n4. 泛型边界示例：");
        
        // 只接受Number或其子类
        System.out.println("整数之和：" + sum(1, 2, 3, 4, 5));
        System.out.println("双精度之和：" + sum(1.5, 2.5, 3.5));
        
        // 5. 泛型通配符示例
        System.out.println("\n5. 泛型通配符示例：");
        
        Box<Integer> intBox = new Box<>();
        intBox.setContent(42);
        
        Box<Double> doubleBox2 = new Box<>();
        doubleBox2.setContent(3.14);
        
        // 使用通配符可以接受任何类型的Box
        printBoxContent(intBox);
        printBoxContent(doubleBox2);
    }
    
    // 1. 泛型类
    static class Box<T> {
        private T content;
        
        public T getContent() {
            return content;
        }
        
        public void setContent(T content) {
            this.content = content;
        }
    }
    
    // 2. 泛型接口
    interface Processor<T> {
        T process(T input);
    }
    
    // 实现泛型接口 - 处理字符串
    static class StringProcessor implements Processor<String> {
        @Override
        public String process(String input) {
            return input.toUpperCase();
        }
    }
    
    // 实现泛型接口 - 处理整数
    static class IntegerProcessor implements Processor<Integer> {
        @Override
        public Integer process(Integer input) {
            return input * 2;
        }
    }
    
    // 3. 泛型方法
    public static <T> void printArray(T[] array) {
        for (T element : array) {
            System.out.print(element + " ");
        }
        System.out.println();
    }
    
    public static <T> boolean isEqual(T a, T b) {
        return a.equals(b);
    }
    
    // 4. 泛型边界 - 只接受Number或其子类
    public static <T extends Number> double sum(T... numbers) {
        double total = 0.0;
        for (T number : numbers) {
            total += number.doubleValue();
        }
        return total;
    }
    
    // 5. 泛型通配符 - 可以接受任何类型的Box
    public static void printBoxContent(Box<?> box) {
        System.out.println("Box内容：" + box.getContent());
    }
}
```

## 说明

该示例展示了Java中泛型的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../../index.md)
- [语言对比](../../comparisons/)
