// title: 版本号排序的方法
/**
 * 题目描述:有一组版本号如下['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']。
 * 现在需要对其进行排序，排序的结果为 ['4.3.5','4.3.4.5','2.3.3','0.302.1','0.1.1']
 */

function versionSort(arr) {
  return arr.sort((a, b) => {
    const arr1 = a.split(".");
    const arr2 = b.split(".");
    let i = 0;
    while (true) {
      // 这一步很重要，先读取值再移动指针
      const s1 = arr1[i];
      const s2 = arr2[i];
      i++;
      if (s1 === undefined || s2 === undefined) {
        return arr2.length - arr1.length;
      }
      if (s1 === s2) {
        continue;
      }
      return s2 - s1;
    }
  });
}
const arr = ["0.1.1", "2.3.3", "0.302.1", "4.2", "4.3.5", "4.3.4.5"];
console.log(versionSort(arr));
