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
Dynamically create table row<tr> & data <td> to fill in table 
Capture input from each text field

Right now, this app is not storing input into firebase. Encountering ```ERROR AT LINE 32.```

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
  /*
  var database = firebase.database();

  var trainName = "";
  var destination = "";
  var firstTrainTime = "";
  var frequency = 0;
  var minAway = 0;
  */


$( document ).ready(function() {
    $("#submit").on("click", function(event) {
        event.preventDefault();
    
        var trainName = $("#trainName").val();
        var destination = $("#destination").val();
        var firstTrainTime = $("#firstTrainTime").val();
        var frequency = $("#frequency").val();
        var minAway = $("#minAway").val();
        
        /*
        //Creating object in firebase
        database.ref().set({
            newName: trainName,
            newDestination: destination,
            newTrainTime: firstTrainTime,
            newFrequency: frequency,
            newMinAway: minAway
        });

        database.ref().on("value", function(snapshot){

            console.log(snapshot.val());
            console.log(snapshot.val().newName);
            console.log(snapshot.val().newDestination);
            console.log(snapshot.val().newTrainTime);
            console.log(snapshot.val().newFrequency);
            console.log(snapshot.val().newMinAway);

            var a = $("<tr>");
            var b = $("<td>");
            var c = $("<td>");
            var d = $("<td>");
            var e = $("<td>");
            var f = $("<td>")

            b.text(snapshot.val().newName);
            c.text(snapshot.val().newDestination);
            d.text(snapshot.val().newTrainTime);
            e.text(snapshot.val().newFrequency);
            f.text(snapshot.val().newMinAway);

            a.append(b);
            a.append(c);
            a.append(d);
            a.append(e);
            a.append(f);
            $("tbody").append(a);

        }, function(errorObject) {
            console.log("Errors handled: " + errorObject.code);
        });
        */

        
        var newObject = {
            newName: trainName,
            newDestination: destination,
            newTrainTime: firstTrainTime,
            newFrequency: frequency,
            newMinAway: minAway
        };
        console.log(newObject);
        

        var a = $("<tr>");
        var b = $("<td>");
        var c = $("<td>");
        var d = $("<td>");
        var e = $("<td>");
        var f = $("<td>")

        b.text(newObject.newName);
        c.text(newObject.newDestination);
        d.text(newObject.newTrainTime);
        e.text(newObject.newFrequency);
        f.text(newObject.newMinAway);

        a.append(b);
        a.append(c);
        a.append(d);
        a.append(e);
        a.append(f);
        $("tbody").append(a);
        
        
    })
});

    
    



   





