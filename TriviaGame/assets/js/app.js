
//Timer
var sec = 60;

//Show quiz and timer start 
function showDiv() {
    document.getElementById('quiz').style.display = "block";
    
    var time = setInterval(myTimer, 1000);

    function myTimer() {
        document.getElementById('timer').innerHTML = sec + "sec left";
        sec--;
        if (sec === -1) {
            clearInterval(time);
            alert("Times up!");
        }  
    }
    
 }


function submit() {
    document.getElementById("submit").addEventListener("click", alert("Answers Submitted. Thanks for playing!"));
}



  