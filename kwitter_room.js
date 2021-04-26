//ADD YOUR FIREBASE LINKS HERE
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
document.getElementById("user_name").innerHTML = "Welcome "+user_name;

function addroom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location = "kwitter_page.html";

    
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("room name is  "+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
document.getElementById("output").innerHTML += row; 
    //End code
    });});}
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html";
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}