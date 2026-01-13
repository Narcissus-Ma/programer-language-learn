// title: 计算一个数的立方和
public class SumOfSeries {
    public static int sumOfSeries(int n) {
        // 使用数学公式: 1³ + 2³ + ... + n³ = [n(n+1)/2]²
        return (int) Math.pow(n * (n + 1) / 2, 2);
    }
    
    public static void main(String[] args) {
        System.out.println(sumOfSeries(5)); // 输出: 225
    }
}