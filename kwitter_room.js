
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCXs4SvkLDFgeibBZgPP9Z3mXCXLDQsrkw",
      authDomain: "class-test-c2581.firebaseapp.com",
      databaseURL: "https://class-test-c2581-default-rtdb.firebaseio.com",
      projectId: "class-test-c2581",
      storageBucket: "class-test-c2581.appspot.com",
      messagingSenderId: "247108018930",
      appId: "1:247108018930:web:c68d86a3700744b81de66b"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"     +user_name +"!";
    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
     getData();
     function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html"
     }
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location="qwitter.html";
}

