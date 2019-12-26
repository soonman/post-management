// // document.querySelector(".save_button").addEventListener("click", function() {
//   window.location.href = "https://www.naver.com";
// });

firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId
});

var db = firebase.firestore();
var aptRef = db.collection("apt");
var usersRef2 = db.collection("users");

const url = new URL(window.location.href);
const name = url.searchParams.get("name");
const dong = url.searchParams.get("dong");
const ho = url.searchParams.get("ho");
const require = url.searchParams.get("require");

// var docRef = db.collection("users").doc("asjdfklasjdklfls");

// ({ docName, apt, dong, ho, requirement }) => {
//   // Add a new document in collection "cities"
//   db.collection(collectionName)
//     .doc(docName)
//     .set({
//       apt,
//       dong,
//       ho,
//       requirement
//     })
//     .then(function() {
//       console.log("Document successfully written!");
//     })
//     .catch(function(error) {
//       console.error("Error writing document: ", error);
//     });
// }

function addUser() {
  // var apt = document.querySelector(".apt_list").value;
  var dong = document.querySelector("#dong_input").value;
  var ho = document.querySelector("#ho_input").value;
  var require = document.querySelector("#requirement").value;

  db.collection("apt")
    .doc(name)
    .set({
      name,
      dong,
      ho,
      require
    })
    .then(function() {
      console.log("문서 잘 써짐!");
      alert("문서 잘 써짐!");
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
}

document.querySelector(".save_button").addEventListener("click", function() {
  addUser();
});

// aptRef.get().then(function(querySnapshot) {
//   querySnapshot.forEach(function(doc) {
//     var name = doc.data().name;
//     var dong = doc.data().dong;
//     var ho = doc.data().ho;
//     var require = doc.data().require;

//     $("#dong_input").val(dong);
//     $("#ho_input").val(ho);
//     $("#requirement").val(require);
//     console.log("TCL: name", name, dong, ho, require);
//     // var name = `${doc.data().dong} ${doc.data().ho} ${doc.data().require}`;
//     $("#dong_list ul").append(
//       $(
//         `<li><a href=/write.html?name=${name}><span>${(name,
//         dong)}</span><a/></li>`
//       )
//     );
//   });
// });

// var show = usersRef.get().then(function(querySnapshot) {
//   querySnapshot.forEach(function(doc) {
//     var name = `${doc.data().dong} ${doc.data().ho} ${doc.data().require}`;
//     alert("hello");
//   });
// });

console.log(name, dong, ho, require);

$("#title_name").append($(`<li>${name}</li>`));
$(".apt_list").append($(`<p>${name}</p>`));
$("#dong_input").val(dong);
$("#ho_input").val(ho);
$("#requirement").val(require);

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
