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

db.collection("users")
  .add({
    first: "ㅎㅎ",
    last: "ㅋㅋ",
    born: 1990
  })
  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });
