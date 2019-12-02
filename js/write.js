document.querySelector(".save_button").addEventListener("click", function() {
  alert("hi");
});

firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId
});

var db = firebase.firestore();
var usersRef = db.collection("users");
// console.log("TCL: usersRef", usersRef);

usersRef.get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
    var name = `${doc.data().first}${doc.data().last}${doc.data().born}`;
    $("#title_name").append(
      $(`<a href=/write.html?name=${name}><li>${name}</li><a/>`)
    );
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

console.log(getUrlParameter("name"));
