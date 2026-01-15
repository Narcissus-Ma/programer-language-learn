// title: 利用 XMLHttpRequest 手写 AJAX 实现
// 简化版本实现, 记这个就好
const ajax = (option) => {
  const { url, type, data, success, fail } = option;
  const xhr = new XMLHttpRequest();
  xhr.open(type, url, true);
  xhr.send(data);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.responseText);
      } else {
        fail(xhr.status);
      }
    }
  };
  return xhr;
};
// 详细版本实现
const ajaxAdvance = (option) => {
  //处理obj
  const objToString = (data) => {
    data.t = new Date().getTime();
    let res = [];
    for (let key in data) {
      //需要将key和value转成非中文的形式，因为url不能有中文。使用encodeURIComponent();
      res.push(encodeURIComponent(key) + " = " + encodeURIComponent(data[key]));
    }
    return res.join("&");
  };

  let str = objToString(option.data || {});
  // 1. 创建一个xhr对象
  let xhr, timer;
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    // code for ie6,ie5
    xhr = new ActiveXObject("Microsoft.xmlHttp");
  }
  // 2.设置请求方式和请求地址；
  // 判断请求的类型是POST还是GET
  if (option.type.toLowerCase() === "get") {
    xhr.open(option.type, option.url + "?t=" + str, true);
    xhr.send();
  } else {
    xhr.open(option.type, option.url, true);
    // 注意：在post请求中，必须在open和send之间添加HTTP请求头：setRequestHeader(header,value);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //  3.发送请求；
    xhr.send(str);
  }

  //  4.监听状态的变化；
  xhr.onreadystatechange = function () {
    clearInterval(timer);
    debugger;
    if (xhr.readyState === 4) {
      if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
        //  5.处理返回的结果；
        option.success(xhr.responseText); //成功后回调；
      } else {
        option.error(xhr.responseText); //失败后回调；
      }
    }
  };

  //判断外界是否传入了超时时间
  if (option.timeout) {
    timer = setInterval(function () {
      xhr.abort(); //中断请求
      clearInterval(timer);
    }, option.timeout);
  }
};
