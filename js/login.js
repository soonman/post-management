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

  var email = document.querySelector(".text_value").value;
  var password = document.querySelector(".pw_value").value;

  // Promise
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(function(response) {
      console.log(response);
      window.location.href = "./list.html";
    })
    .catch(function(error) {
      console.log("TCL: error", error);
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      // ...
    });
});

// window.location.href를 사용하는 것이 효과적?
