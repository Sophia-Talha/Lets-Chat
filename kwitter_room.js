var firebaseConfig = {
    apiKey: "AIzaSyBG824Zla45WLE2yoYEXDBeGHl8hQtX15Y",
    authDomain: "chatbook-65627.firebaseapp.com",
    databaseURL:"https://chatbook-65627-default-rtdb.firebaseio.com/",
    projectId: "chatbook-65627",
    storageBucket: "chatbook-65627.appspot.com",
    messagingSenderId: "719900473088",
    appId: "1:719900473088:web:8f31e3fe5e66dbd063e5e5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name")
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
     console.log("Room Name - " + Room_names);
     row = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function addRoom()
{
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html"
}
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setitem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
// Your web app's Firebase configuration