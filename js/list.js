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

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId
});

var db = firebase.firestore();
var first_db = document.querySelector(".first_value").value;
var last_db = document.querySelector(".last_value").value;
var born_db = document.querySelector(".born_value").value;

db.collection("users")
  .add({
    first: first_db,
    last: last_db,
    born: born_db
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
