document.querySelector(".logout_button").addEventListener("click", function(e) {
  e.preventDefault();
  Cookies.remove("who");
  alert("Cookie삭제, 로그아웃 되었습니다");
  console.log(Cookies.remove("who"));
  window.location.href = "./login.html";
});
