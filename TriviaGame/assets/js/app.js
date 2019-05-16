


//Show quiz at start 
function showDiv() {
    document.getElementById('quiz').style.display = "block";
 }

//Timer
var sec = 60;
var time = setInterval(myTimer, 1000);

function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Times up!");
    }
}





  