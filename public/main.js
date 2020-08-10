console.log("这是main。js");

//挑战1使用AJAX加载CSS
getCSS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get", "/style.css"); //readyState = 1
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      //下载完成,但不知道是成功2xx 还是失败4xx 5xx;
      if (request.status >= 200 && request.status < 300) {
        //状态码判断是否下载成功
        const style = document.createElement("style");
        style.innerHTML = request.response;
        document.head.appendChild(style);
      } else {
        alert("加载css失败");
      }
    }
  };
  request.send(); //readyState = 2
};

//加载js
getJS.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onreadystatechange = () => {
    //创建script标签
    console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const script = document.createElement("script");
        //填写script内容
        script.innerHTML = request.response;
        //插到body里
        document.body.appendChild(script);
      } else {
        alert("加载js失败");
      }
    }
  };
  request.send();
};

//加载html
getHTML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
      } else {
        console.log("加载html失败");
      }
    }
  };
  request.send();
};

//加载xml
getXML.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      }
    }
  };
  request.send();
};

//加载JSON
getJSON.onclick = () => {
  //   console.log("hi");
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const object = JSON.parse(request.response);
        myName.textContent = object.name;
      }
    }
  };
  request.send();
};

//加载下一页
let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4) {
      if (request.status >= 200 && request.status < 300) {
        const array = JSON.parse(request.response);
        array.forEach((item) => {
          const li = document.createElement("li");
          li.textContent = item.id;
          xxx.appendChild(li);
        });
        n += 1;
      }
    }
  };
  request.send();
};
