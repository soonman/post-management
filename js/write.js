// // document.querySelector(".save_button").addEventListener("click", function() {
//   window.location.href = "https://www.naver.com";
// });

firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId
});

var db = firebase.firestore();
var usersRef = db.collection("apt");
var usersRef2 = db.collection("users");
// var docRef = db.collection("users").doc("asjdfklasjdklfls");

function addUser() {
  var apt = document.querySelector(".apt_list").value;
  var dong = document.querySelector("#dong_list").value;
  var ho = document.querySelector("#ho_list").value;
  var require = document.querySelector("#requirement").value;

  db.collection("apt")
    .add({
      apt,
      dong,
      ho,
      require
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}

document.querySelector(".save_button").addEventListener("click", function() {
  addUser();
});

// console.log(addUser());
const url = new URL(window.location.href);
const name = url.searchParams.get("name");

$("#title_name").append($(`<li>${name}</li>`));

// usersRef2.get().then(function(querySnapshot) {
//   querySnapshot.forEach(function(doc) {
//     console.log("TCL: doc", doc.data());
//     var name = `${doc.data().apt_list}`;
//     $("#title_name").append($(`<h1><li>${name}</li><h1>`));
//   });
// });

usersRef.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    var name = `${doc.data().apt}`;
    $("#apt_select").append($(`<option value=${name}>${name}</option>`));
  });
});

usersRef.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    var name = `${doc.data().dong}`;
    $("#dong_list").append($(`<option value=${name}>${name}</option>`));
  });
});

usersRef.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    var name = `${doc.data().ho}`;
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
