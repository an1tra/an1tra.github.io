//I think I start with an object. Something like this
/*
Example: var train = {
    name: Train1,
    destination: Destination1,
    frequency: Frequency1,
    next-arrival: Arrival Time 1,
    minutes-away: 
}

Staticly create a table.
Capture input from each text field
Dynamically create table row<tr> & data <td> to fill in table 

Right now, this app is not storing input into firebase. Encountering ```ERROR AT LINE 32.```
If you comment out the firebase, this app works by adding all input to the appropriate display area. 
*/

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB7Atay0p__g8isNiqVHbJ6QHxZjY61MlY",
    authDomain: "train-scheduler-6c73f.firebaseapp.com",
    databaseURL: "https://train-scheduler-6c73f.firebaseio.com",
    projectId: "train-scheduler-6c73f",
    storageBucket: "train-scheduler-6c73f.appspot.com",
    messagingSenderId: "741608056987",
    appId: "1:741608056987:web:38a147c538e4afac"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var database = firebase.database();

  var trainName = "";
  var destination = "";
  var frequency = 0;
  var firstTrainTime = "";
  var minAway = 0;
  



    $("#submit").on("click", function(event) {
        
        event.preventDefault();
        

        var trainName = $("#trainName").val();
        var destination = $("#destination").val();
        var frequency = $("#frequency").val();
        var firstTrainTime = $("#firstTrainTime").val();
        var minAway = $("#minAway").val();
        
        
        //Creating object in firebase
        database.ref().set({
            trainName: trainName,
            destination: destination,
            frequency: frequency,
            firstTrainTime: firstTrainTime,
            minAway: minAway
        });


        

        database.ref().on("value", function(snapshot){
        

            console.log(snapshot.val());
            console.log(snapshot.val().trainName);
            console.log(snapshot.val().destination);
            console.log(snapshot.val().frequency);
            console.log(snapshot.val().firstTrainTime);
            console.log(snapshot.val().minAway);
            

            
            var a = $("<tr>");
            var b = $("<td>");
            var c = $("<td>");
            var d = $("<td>");
            var e = $("<td>");
            var f = $("<td>")

            b.text(snapshot.val().trainName);
            c.text(snapshot.val().destination);
            d.text(snapshot.val().frequency);
            e.text(snapshot.val().firstTrainTime);
            f.text(snapshot.val().minAway);

            
            a.append(b);
            a.append(c);
            a.append(d);
            a.append(e);
            a.append(f);

            
            $("#table-body").append(a);
            

        }, function(errorObject) {
            console.log("Errors handled: " + errorObject.code);
        });
        


        
    })


    
    



   





