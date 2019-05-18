
let arr = ['rhino', 'elephant', 'horse', 'giraffe', 'cow',
'cheetah', 'chicken', 'koala'];
let buttonDiv = document.getElementById("buttonDiv");

for (i=0; i < arr.length; i++) {
  let button = document.createElement("button");
  button.innerHTML = arr[i];
  buttonDiv.appendChild(button);
  button.addEventListener ("click", function() {
    alert(this.innerHTML);
  });
}


 