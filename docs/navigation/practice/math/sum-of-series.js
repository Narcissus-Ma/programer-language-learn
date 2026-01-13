// title: 计算一个数的立方和
function sumOfSeries(n) {
    // 使用数学公式: 1³ + 2³ + ... + n³ = [n(n+1)/2]²
    return Math.pow(n * (n + 1) / 2, 2);
}

console.log(sumOfSeries(5)); // 输出: 225