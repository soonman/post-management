console.log("load!");

console.log(document.querySelector(".test1234"));

function a() {}

// document.querySelector(".login_button").addEventListener("click", function(e) {
//   e.preventDefault();

//   alert("hi!");
// });


// document.querySelector(".login_button").addEventListener("click", function(e){
//   e.preventDefault();
//   window.location.href="http://www.naver.com";
// })

// 네이버페이지 이동성공

document.querySelector(".login_button").addEventListener("click", function(e){
  e.preventDefault();
  window.location.href="list.html";
})

// window.location.href를 사용하는 것이 효과적?