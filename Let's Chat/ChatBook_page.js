//YOUR FIREBASE LINKS
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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);
    name = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4>" + name + "<img class= 'user_checkmark' src='checkmark.png'> </h4>";
    message_with_tag = "<h4 class= 'message_h4'>" + message + "</h4>";
like_button = "<button class= 'btn btn-success' id="+firebase_message_id+" value="+like+" onclick= 'updateLike(this.id)'>";
    span_with_tag = "span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;
    //End code
    } });  }); }
getData();

function send()
{
    msg = document.getElementById("msg") .value = "";
    firebase.database().ref(room_name).push({
          name:username,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}
function updateLike(message_id)
{
    console.log("clicked on like button - " + message_id);
    button_id = message_id
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes)
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
          like = updated_likes
    });
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
    }