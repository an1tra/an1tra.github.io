let emptyArray = [];


function fizzbuzz() {
    
   
    for(let i = 0; i<=100; i++) {

        if(i % 3 === 0 && i % 5 === 0) {
            emptyArray.push("fizzbuzz");
        }
    
        else if(i % 3 === 0) {
            emptyArray.push("fizz");
        } 
        
        else if(i % 5 === 0) {
            emptyArray.push("buzz");
        }
        else {
            emptyArray.push(i);
        }
    } 
    

    console.log(emptyArray);
}

fizzbuzz();