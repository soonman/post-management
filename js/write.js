document.querySelector(".save_button").addEventListener("click", function() {
  window.location.href = "https://www.naver.com";
});

firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId
});

var db = firebase.firestore();
var usersRef = db.collection("users");
var docRef = db.collection("users").doc("asjdfklasjdklfls");

usersRef.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    console.log("TCL: doc", doc.data());
    var name = `${doc.data().first}${doc.data().last}${doc.data().born}`;
    $("#title_name").append($(`<h1><li>${name}</li><h1><a/>`));
  });
});

usersRef.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    var name = `${doc.data().first}`;
    $("#apt_list").append($(`<option value=${name}>${name}</option>`));
  });
});

usersRef.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    var name = `${doc.data().last}`;
    $("#dong_list").append($(`<option value=${name}>${name}</option>`));
  });
});

usersRef.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    var name = `${doc.data().born}`;
    $("#ho_list").append($(`<option value=${name}>${name}</option>`));
  });
});

var getUrlParameter = function(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split("&"),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split("=");

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};
