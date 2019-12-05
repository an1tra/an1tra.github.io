let emptyArray = [];


function fizzbuzz() {
    
   
    for(let i = 0; i<=100; i++) { //Here we create a loop that runs from 0 to 100.

        if(i % 3 === 0 && i % 5 === 0) { //Here we get the modulous of each number, pass it through conditions that check if it is divisible by both 3 & 5. 
            emptyArray.push("fizzbuzz"); //If this condition is true we push "fizzbuzz" into the empty array.
        }
    
        else if(i % 3 === 0) { //Must seperate i modulo 3 from i modulo 5 into else if statements due to different desired outputs as opposed to  using the or(||) operator.
            emptyArray.push("fizz");
        } 
        
        else if(i % 5 === 0) {
            emptyArray.push("buzz");
        }
        else {
            emptyArray.push(i);//If none of the previously defined conditions are true just push i into the array. 
        }
    } 
    

    console.log(emptyArray);
}

fizzbuzz();