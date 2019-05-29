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
Dynamically create table data <td> to fill in table 
Capture input from each text field
*/
var trains = [
    {name: "Trenton Express",
        destination: "Trenton",
        frequency: 25,
        nextArrival: "05:35 PM",
        minutesAway: 10},
    {name: "Oregon Trail",
        destination: "Salem, Oregon",
        frequency: 3600,
        nextArrival: "01:39 PM",
        minutesAway: 1154},
    {name: "Midnight Carriage",
        destination: "Philadelphia",
        frequency: 15,
        nextArrival: "05:35 PM",
        minutesAway: 10},
    {name: "Sing Sing Caravan",
        destination: "Atlanta",
        frequency: 45,
        nextArrival: "05:53 PM",
        minutesAway: 28},
    {name: "Boston Train",
        destination: "Boston",
        frequency: 65,
        nextArrival: "05:50 PM",
        minutesAway: 25},
    {name: "California Caravan",
        destination: "San Francisco",
        frequency: 6000,
        nextArrival: "01:25 AM",
        minutesAway: 4740},
    {name: "Analben's Train",
        destination: "Florida",
        frequency: 25,
        nextArrival: "05:28 PM",
        minutesAway: 3}
];
console.log(trains);

for(var i=0; i < trains.length; i++){
    var eachTrain = trains[i];
    console.log(eachTrain);
}

$( document ).ready(function() {
    $("#submit").on("click", function(event) {
        event.preventDefault();
    
        var trainName = $("#trainName").val();
        var destination = $("#destination").val();
        var firstTrainTime = $("#firstTrainTime").val();
        var frequency = $("#frequency").val();
        var minAway = $("#minAway").val();
        console.log(trainName);
        console.log(destination);
        console.log(firstTrainTime);
        console.log(frequency);
        console.log(minAway);


        var newObject = {
            newName: trainName,
            newDestination: destination,
            newTrainTime: firstTrainTime,
            newFrequency: frequency,
            newMinAway: minAway
        };
        console.log(newObject);
        console.log(newObject.newName);

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

    
    



   





