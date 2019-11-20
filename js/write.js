document.querySelector(".save_button").addEventListener("click", function() {
  alert("hi");
});

// function addUser() {
//   var first = document.querySelector(".first_value").value;
//   var last = document.querySelector(".last_value").value;
//   var born = document.querySelector(".born_value").value;

//   db.collection("users")
//     .add({
//       first,
//       last,
//       born
//     })
//     .then(function(docRef) {
//       console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//       console.error("Error adding document: ", error);
//     });
// }

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
