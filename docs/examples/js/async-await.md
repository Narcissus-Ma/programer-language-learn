# 异步编程

## JavaScript 异步编程示例

以下是JavaScript中异步编程的示例代码：

```js
// 异步编程示例（async/await）

// 模拟API请求函数
function fetchData(url, delay = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url.includes('error')) {
        reject(new Error(`请求失败: ${url}`));
      } else {
        resolve(`成功获取数据: ${url}`);
      }
    }, delay);
  });
}

// 1. 基本的async/await用法
async function basicAsyncAwait() {
  console.log('开始请求数据...');
  try {
    const result = await fetchData('https://api.example.com/data');
    console.log(result);
    console.log('请求完成！');
  } catch (error) {
    console.error('请求出错:', error.message);
  }
}

// 2. 并行请求
async function parallelRequests() {
  console.log('\n开始并行请求...');
  try {
    const [result1, result2, result3] = await Promise.all([
      fetchData('https://api.example.com/data1', 1500),
      fetchData('https://api.example.com/data2', 1000),
      fetchData('https://api.example.com/data3', 800)
    ]);
    console.log('并行请求结果:', result1, result2, result3);
    console.log('所有请求完成！');
  } catch (error) {
    console.error('并行请求出错:', error.message);
  }
}

// 3. 串行请求
async function sequentialRequests() {
  console.log('\n开始串行请求...');
  try {
    const result1 = await fetchData('https://api.example.com/data1', 500);
    console.log(result1);
    
    const result2 = await fetchData('https://api.example.com/data2', 500);
    console.log(result2);
    
    const result3 = await fetchData('https://api.example.com/data3', 500);
    console.log(result3);
    
    console.log('所有串行请求完成！');
  } catch (error) {
    console.error('串行请求出错:', error.message);
  }
}

// 4. 使用Promise.race获取最快的响应
async function raceRequests() {
  console.log('\n开始竞争请求...');
  try {
    const result = await Promise.race([
      fetchData('https://api.example.com/slow', 2000),
      fetchData('https://api.example.com/fast', 500),
      fetchData('https://api.example.com/medium', 1000)
    ]);
    console.log('最快响应:', result);
  } catch (error) {
    console.error('竞争请求出错:', error.message);
  }
}

// 5. 错误处理
async function errorHandling() {
  console.log('\n测试错误处理...');
  try {
    const result = await fetchData('https://api.example.com/error');
    console.log(result);
  } catch (error) {
    console.error('捕获到错误:', error.message);
    // 可以在这里进行错误恢复或记录
  } finally {
    console.log('无论成功失败都会执行的代码');
  }
}

// 执行所有示例
async function runAllExamples() {
  await basicAsyncAwait();
  await parallelRequests();
  await sequentialRequests();
  await raceRequests();
  await errorHandling();
}

// 调用示例
runAllExamples();
```

## 说明

该示例展示了JavaScript中异步编程的基本用法和常见操作。

### 主要功能

- 请根据实际代码内容添加功能说明

### 使用场景

- 请根据实际代码内容添加使用场景

## 相关链接

- [返回首页](../../index.md)
- [语言对比](../../comparisons/)
