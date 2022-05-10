//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCbhc8gdR6t_8X0Vwka80DO-3sw0hQVmns",
      authDomain: "kwitter-1-ec4bb.firebaseapp.com",
      databaseURL: "https://kwitter-1-ec4bb-default-rtdb.firebaseio.com",
      projectId: "kwitter-1-ec4bb",
      storageBucket: "kwitter-1-ec4bb.appspot.com",
      messagingSenderId: "864401804639",
      appId: "1:864401804639:web:8297580e19470ad289faea"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
