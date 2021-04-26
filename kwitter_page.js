//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCgM7vlRSDLMpC-Jsrj0uvW5lqdDjVNsSA",
      authDomain: "kwitter-app-6d7ee.firebaseapp.com",
      databaseURL: "https://kwitter-app-6d7ee-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-6d7ee",
      storageBucket: "kwitter-app-6d7ee.appspot.com",
      messagingSenderId: "79917034557",
      appId: "1:79917034557:web:e5413193a59fa752eece54"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            message :msg,
            name:user_name,
            like:0
      });

      document.getElementById("msg").value ="";
    }

    function logout()
    {
          localStorage.removeItem("room_name");
          localStorage.removeItem("user_name");
          window.location = "index.html";
    }
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name1 = message_data["name"];
message = message_data["message"];
like = message_data["like"];
name_with_tag = "<h4>"+name1+"<img class='user_tick' src ='tick.jfif'></h4>";
message_with_tag = "<h4 class = 'message_h4'>"+message+"</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
console.log("clicked on like button"+message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
update_like = Number(likes) + 1;
console.log(update_like);

firebase.database().ref(room_name).child(message_id).update({
      like : update_like
})
}