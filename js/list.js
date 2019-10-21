console.log(Cookies.get("who"));
document.write(Cookies.get("who"));

document.querySelector(".logout_button").addEventListener("click", function(e) {
  e.preventDefault();
  Cookies.remove("who");
  alert("Cookie삭제, 로그아웃 되었습니다");
  console.log(Cookies.remove("who"));
  window.location.href = "./login.html";
});

if (Cookies.get("who")) {
  console.log(Cookies.get("who"));
} else {
  window.location.href = "./login.html";
}
