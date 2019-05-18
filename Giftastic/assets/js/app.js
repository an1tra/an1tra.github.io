
let arr = ['rhino', 'elephant', 'horse', 'giraffe', 'cow',
'cheetah', 'chicken', 'koala'];
let buttonDiv = document.getElementById("buttonDiv");

for (i=0; i < arr.length; i++) {
  let button = document.createElement("button");
  button.innerHTML = arr[i];
  buttonDiv.appendChild(button);
  button.addEventListener ("click", function() {
    /*This is where the giphy search would happen if i knew what I was doing. For now, alert.*/ 
    alert(this.innerHTML);
  });
}




function newBtn() {
  let newButton = document.createElement("button");
  
  newButton.innerHTML = "input"; //This is where I want to place the input from the search box to form a new button. For now, the new button says "input".
  buttonDiv.appendChild(newButton);
  
}
