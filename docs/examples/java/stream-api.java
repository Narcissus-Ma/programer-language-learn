// title: Stream API
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

public class StreamApiExample {
    public static void main(String[] args) {
        // 创建示例数据
        List<String> names = Arrays.asList("张三", "李四", "王五", "赵六", "钱七", "孙八");
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        List<Person> people = new ArrayList<>();
        people.add(new Person("张三", 25, "北京"));
        people.add(new Person("李四", 30, "上海"));
        people.add(new Person("王五", 28, "广州"));
        people.add(new Person("赵六", 35, "北京"));
        people.add(new Person("钱七", 22, "上海"));
        
        System.out.println("1. 过滤操作：");
        // 过滤出偶数
        List<Integer> evenNumbers = numbers.stream()
                .filter(n -> n % 2 == 0)
                .collect(Collectors.toList());
        System.out.println("偶数：" + evenNumbers);
        
        System.out.println("\n2. 映射操作：");
        // 将每个数字乘以2
        List<Integer> doubled = numbers.stream()
                .map(n -> n * 2)
                .collect(Collectors.toList());
        System.out.println("数字翻倍：" + doubled);
        
        // 将姓名转换为大写
        List<String> upperCaseNames = names.stream()
                .map(String::toUpperCase)
                .collect(Collectors.toList());
        System.out.println("姓名大写：" + upperCaseNames);
        
        System.out.println("\n3. 排序操作：");
        // 按年龄排序
        List<Person> sortedByAge = people.stream()
                .sorted((p1, p2) -> Integer.compare(p1.getAge(), p2.getAge()))
                .collect(Collectors.toList());
        System.out.println("按年龄排序：");
        sortedByAge.forEach(System.out::println);
        
        System.out.println("\n4. 匹配操作：");
        // 检查是否有北京人
        boolean hasBeijingPerson = people.stream()
                .anyMatch(p -> p.getCity().equals("北京"));
        System.out.println("是否有北京人：" + hasBeijingPerson);
        
        // 检查是否所有人年龄都大于20
        boolean allOlderThan20 = people.stream()
                .allMatch(p -> p.getAge() > 20);
        System.out.println("所有人年龄都大于20：" + allOlderThan20);
        
        System.out.println("\n5. 归约操作：");
        // 计算数字总和
        int sum = numbers.stream()
                .reduce(0, Integer::sum);
        System.out.println("数字总和：" + sum);
        
        // 计算平均年龄
        double averageAge = people.stream()
                .mapToInt(Person::getAge)
                .average()
                .orElse(0);
        System.out.println("平均年龄：" + averageAge);
        
        System.out.println("\n6. 分组操作：");
        // 按城市分组
        Map<String, List<Person>> groupedByCity = people.stream()
                .collect(Collectors.groupingBy(Person::getCity));
        System.out.println("按城市分组：");
        groupedByCity.forEach((city, personList) -> {
            System.out.println(city + ": " + personList);
        });
        
        System.out.println("\n7. 统计操作：");
        // 统计年龄信息
        List<Integer> ages = people.stream()
                .map(Person::getAge)
                .collect(Collectors.toList());
        System.out.println("年龄列表：" + ages);
        
        // 计算年龄总和
        int totalAge = ages.stream()
                .mapToInt(Integer::intValue)
                .sum();
        System.out.println("年龄总和：" + totalAge);
        
        // 计算最大年龄
        int maxAge = ages.stream()
                .mapToInt(Integer::intValue)
                .max()
                .orElse(0);
        System.out.println("最大年龄：" + maxAge);
        
        // 计算最小年龄
        int minAge = ages.stream()
                .mapToInt(Integer::intValue)
                .min()
                .orElse(0);
        System.out.println("最小年龄：" + minAge);
    }
    
    // 内部类：Person
    static class Person {
        private String name;
        private int age;
        private String city;
        
        public Person(String name, int age, String city) {
            this.name = name;
            this.age = age;
            this.city = city;
        }
        
        public String getName() {
            return name;
        }
        
        public int getAge() {
            return age;
        }
        
        public String getCity() {
            return city;
        }
        
        @Override
        public String toString() {
            return "Person{" +
                    "name='" + name + '\'' +
                    ", age=" + age +
                    ", city='" + city + '\'' +
                    '}';
        }
    }
}