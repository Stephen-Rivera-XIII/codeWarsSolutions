// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//you would want to read each index into an array
//then you want to multiply each array index by itself
//then you would want to print each of those results into an array
//then you want to return the array contents as a concatenated string
function squareDigits(num){
    let toBeSquared = Array.from(num.toString()).map(Number); //read each value into an array
    let squaredInAnArray = toBeSquared.map(x => Math.pow(x,2)) //square each element and store as a string 
    let finalResult = +squaredInAnArray.join(""); //convert string to integer
    ;
      
      
      return finalResult;
    }