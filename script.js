//小钟表显示实时时间
function showTime() {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  hour = (hour < 10 ? "0" : "") + hour;
  minute = (minute < 10 ? "0" : "") + minute;
  second = (second < 10 ? "0" : "") + second;
  month = (month < 10 ? "0" : "") + month; // 如果月小于10，前面补0
  day = (day < 10 ? "0" : "") + day; // 如果日期小于10，前面补0
  let today = year + "." + month + "." + day + "<br>"; //日期格式为年.月.日
  let time = hour + ":" + minute + ":" + second; // 时间格式为"时:分:秒"
  document.getElementById("clock").innerHTML = today + time;
}
setInterval(showTime, 1000); // 每秒更新一次时钟时间

//主页图片循环播放
let scenery = ["scenery1.jpg", "scenery2.jpg", "scenery3.jpg"]; // 图片列表
let currentImageIndex = 0; // 当前显示的图片索引

function changeBackgroundImage() {
  let screen = document.getElementById("screen");
  screen.style.backgroundImage =
    "url(images/" + scenery[currentImageIndex] + ")";
  currentImageIndex = (currentImageIndex + 1) % scenery.length; // 更新索引以循环播放图片
}
setInterval(changeBackgroundImage, 3000); // 每3秒切换一次背景图片

//点击头像进入登录页面
function loginPage() {
  window.location.href = "login.html";
}

//登录界面和注册界面
var loginForm = document.getElementById("login-form");
var registerForm = document.getElementById("register-form");
var captchaEquation = document.getElementById("captcha-equation");

// 初始测试账号
var testUsername = "test";
var testPassword = "123456";

// 显示登录表单，隐藏注册表单
function showLoginForm() {
  loginForm.style.display = "block";
  registerForm.style.display = "none";
}

// 显示注册表单，隐藏登录表单
function showRegisterForm() {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
}

// 切换显示登录或注册表单
function toggleForm() {
  if (loginForm.style.display === "none") {
    showLoginForm();
  } else {
    showRegisterForm();
  }
}

// 登录函数
function login() {
  var username = document.getElementById("login-username").value;
  var password = document.getElementById("login-password").value;

  if (username === testUsername && password === testPassword) {
    alert("登录成功!");
    window.location.href = "index.html";
  } else {
    alert("账号或密码错误!");
  }
}

// 生成验证码
function generateCaptcha() {
  var num1 = Math.floor(Math.random() * 10);
  var num2 = Math.floor(Math.random() * 10);

  captchaEquation.innerText = num1 + " + " + num2 + " = ";

  return num1 + num2;
}
var result = generateCaptcha();

// 注册验证函数
function register() {
  var username = document.getElementById("register-username").value;
  var password = document.getElementById("register-password").value;
  var confirmPassword = document.getElementById(
    "register-confirm-password"
  ).value;
  var captcha = document.getElementById("register-captcha").value;

  if (password !== confirmPassword) {
    alert("两次密码不一致");
  } else if (captcha !== result.toString()) {
    alert("验证码错误");
    result = generateCaptcha();
  } else {
    alert("注册成功");
    window.location.href = "index.html";
  }
}

showLoginForm();
