// console.log("load!");

// console.log(document.querySelector(".test1234"));

// function a() {}

// document.querySelector(".login_button").addEventListener("click", function(e) {
//   e.preventDefault();

//   alert("hi!");
// });

// 네이버페이지 이동성공

// document.querySelector(".login_button").addEventListener("click", function(e){
//   e.preventDefault();
//   window.location.href="http://www.naver.com";
// })
firebase.initializeApp(firebaseConfig);

document.querySelector(".login_button").addEventListener("click", function(e) {
  e.preventDefault();
  // window.open("list.html");

  var email = document.querySelector(".email_value").value;
  var password = document.querySelector(".pw_value").value;

  // Promise
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(function(response) {
      console.log(response.user.email);
      Cookies.set("email", response.user.email);
      Cookies.get(response.user.email);
      console.log(Cookies.set("email", response.user.email));
      window.location.href = "./list.html";
    })
    .catch(function(error) {
      // Handle Errors here.
      console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
});

// window.location.href를 사용하는 것이 효과적?
