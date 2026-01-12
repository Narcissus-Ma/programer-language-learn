# 集合框架

## Java 集合框架示例

以下是Java中集合框架的示例代码：

```java
// 集合框架示例
import java.util.*;
import java.util.stream.Collectors;

public class CollectionsExample {
    public static void main(String[] args) {
        // 1. List接口示例
        System.out.println("1. List接口示例：");
        
        // ArrayList示例
        List<String> arrayList = new ArrayList<>();
        arrayList.add("Java");
        arrayList.add("Python");
        arrayList.add("C++");
        arrayList.add("JavaScript");
        System.out.println("ArrayList：" + arrayList);
        
        // 访问元素
        System.out.println("索引1的元素：" + arrayList.get(1));
        
        // 修改元素
        arrayList.set(2, "C#");
        System.out.println("修改后的ArrayList：" + arrayList);
        
        // 删除元素
        arrayList.remove(3);
        System.out.println("删除后的ArrayList：" + arrayList);
        
        // LinkedList示例
        List<String> linkedList = new LinkedList<>();
        linkedList.add("Red");
        linkedList.add("Green");
        linkedList.add("Blue");
        System.out.println("LinkedList：" + linkedList);
        
        // 2. Set接口示例
        System.out.println("\n2. Set接口示例：");
        
        // HashSet示例（无序）
        Set<String> hashSet = new HashSet<>();
        hashSet.add("Apple");
        hashSet.add("Banana");
        hashSet.add("Cherry");
        hashSet.add("Apple"); // 重复元素不会被添加
        System.out.println("HashSet：" + hashSet);
        
        // TreeSet示例（有序）
        Set<String> treeSet = new TreeSet<>();
        treeSet.add("Orange");
        treeSet.add("Apple");
        treeSet.add("Banana");
        System.out.println("TreeSet：" + treeSet);
        
        // 3. Map接口示例
        System.out.println("\n3. Map接口示例：");
        
        // HashMap示例
        Map<String, Integer> hashMap = new HashMap<>();
        hashMap.put("张三", 25);
        hashMap.put("李四", 30);
        hashMap.put("王五", 28);
        System.out.println("HashMap：" + hashMap);
        
        // 访问元素
        System.out.println("李四的年龄：" + hashMap.get("李四"));
        
        // 遍历Map
        System.out.println("遍历Map：");
        for (Map.Entry<String, Integer> entry : hashMap.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }
        
        // TreeMap示例（按键排序）
        Map<String, Integer> treeMap = new TreeMap<>();
        treeMap.put("C", 3);
        treeMap.put("A", 1);
        treeMap.put("B", 2);
        System.out.println("TreeMap：" + treeMap);
        
        // 4. 队列和栈示例
        System.out.println("\n4. 队列和栈示例：");
        
        // Queue（队列）示例
        Queue<String> queue = new LinkedList<>();
        queue.offer("First");
        queue.offer("Second");
        queue.offer("Third");
        System.out.println("队列元素：" + queue);
        System.out.println("出队元素：" + queue.poll());
        System.out.println("队列剩余元素：" + queue);
        
        // Deque（双端队列）用作栈
        Deque<String> stack = new ArrayDeque<>();
        stack.push("Top");
        stack.push("Middle");
        stack.push("Bottom");
        System.out.println("栈元素：" + stack);
        System.out.println("出栈元素：" + stack.pop());
        System.out.println("栈剩余元素：" + stack);
        
        // 5. 集合操作示例
        System.out.println("\n5. 集合操作示例：");
        
        // 过滤和转换
        List<String> filteredList = arrayList.stream()
                .filter(s -> s.length() > 3)
                .map(String::toUpperCase)
                .collect(Collectors.toList());
        System.out.println("长度大于3且转为大写的元素：" + filteredList);
        
        // 计算总和
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
        int sum = numbers.stream().mapToInt(Integer::intValue).sum();
        System.out.println("数字总和：" + sum);
        
        // 查找最大值
        Optional<Integer> max = numbers.stream().max(Integer::compare);
        System.out.println("最大值：" + max.orElse(0));
        
        // 6. 不可变集合示例
        System.out.println("\n6. 不可变集合示例：");
        
        // 创建不可变List
        List<String> immutableList = List.of("A", "B", "C");
        System.out.println("不可变List：" + immutableList);
        
        // 创建不可变Set
        Set<String> immutableSet = Set.of("X", "Y", "Z");
        System.out.println("不可变Set：" + immutableSet);
        
        // 创建不可变Map
        Map<String, Integer> immutableMap = Map.of("One", 1, "Two", 2, "Three", 3);
        System.out.println("不可变Map：" + immutableMap);
    }
}
```

## 说明

该示例展示了Java中集合框架的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../../index.md)
- [语言对比](../../comparisons/)
