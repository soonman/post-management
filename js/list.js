// console.log(Cookies.get("who"));
// document.write(Cookies.get("who"));

document.querySelector(".logout_button").addEventListener("click", function(e) {
  e.preventDefault();
  Cookies.remove("who");
  alert("Cookie삭제, 로그아웃 되었습니다");
  console.log(Cookies.remove("who"));
  window.location.href = "./login.html";
});
if (Cookies.get("who")) {
} else {
  window.location.href = "./login.html";
}

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId
});

var db = firebase.firestore();
var aptRef = db.collection("apt");

aptRef
  .get()
  .then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      var name = doc.data().name;
      var dong = doc.data().dong;
      var ho = doc.data().ho;
      var require = doc.data().require;
      $("#list ul").append(
        $(
          `<li><a href=write.html?name=${name}&dong=${dong}&ho=${ho}&require=${require}><span>${name}</span><a/></li>`
        )
      );
    });
  })
  .catch(error => {
    console.log("TCL: error", error);
    console.error(error);
  });

// console.log("TCL: doc.data().apt" + doc.data().apt);
// list_ul;
// $("#list ul").append(
//   $('<a href="https://www.naver.com"' + "move" + "</a>")
// );

function addUser() {
  var apt_list = document.querySelector(".apt_name").value;
  // var dong = document.querySelector(".dong_value").value;
  // var ho = document.querySelector(".ho_value").value;

  db.collection("users")
    .add({
      apt_list
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    })
    .finally(function() {
      $("#loading").addClass("d-none");
    });
}

document.querySelector(".add_button").addEventListener("click", function() {
  $("#loading").removeClass("d-none");
  addUser();
});
