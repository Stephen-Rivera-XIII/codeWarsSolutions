function validBraces(braces) {

    function check(expr){
        const holder = []
        const openBrackets = ['(','{','[']
        const closedBrackets = [')','}',']']
        const tryThis= [];
        let x = 0; // if x = 0 before the halfway point of the loop/expression
        let j = 0
        for (let letter of expr) { // loop trought all letters of expr
            if(openBrackets.includes(letter)){ // if its opening bracket
                holder.push(letter)
                x++;
                tryThis.push(x);
                //j++;
                console.log(tryThis);
                console.log(x);
                console.log(j);
                // if (j > x){
                //     return false;
                // }
            }else if(closedBrackets.includes(letter)){ // if its closing
                const openPair = openBrackets[closedBrackets.indexOf(letter)] // find its pair
                if(holder[holder.length - 1] === openPair){ 
                    console.log(openPair)// check if that pair is the last element in the array
                    holder.splice(-1,1) // if so, remove it
                    x--;
                    j++;
                    //if(j>x){return false};
                    console.log(x);
                    console.log(j)
                }else{ // if its not
                    holder.push(letter)
                    break // exit loop
                }
            }
        }
        for (i = 0; i < tryThis.length-1; i++)
        {
            var maybe = tryThis[i+1] - tryThis[i] >= tryThis[i] || tryThis[i+1] - tryThis[i] ==0;
            console.log(tryThis[i])
            console.log(tryThis[i+1])
            console.log(maybe)
            if(maybe == false){
                return maybe
            }
            else{
                i++;
            }

        }
        console.log(j);
        console.log(x);
        console.log((braces.length/2))
        console.log((holder.length === 0 && j+x==0)) //|| holder.length === 0 && j-x < 1))
        return ((holder.length === 0 && j-x >= (braces.length/2)));//|| holder.length === 0 && j-x<1 )) // return true if length is 0, otherwise false
    
}
    let preCheck = check(braces) /// true

    while (preCheck==true){

        function areEqual(array1, array2) {
        if (array1.length === array2.length) {
            return array1.every((element, index) => {
                if (element === array2[index]) {
                    return true;
                }

                return false;
            });
        }

        return false;
    }

    let openingBrackets = [];
    let closingBrackets = [];
    for (let i = 0; i < braces.length; i++) {
        if (braces[i] === "(" ||
            braces[i] === "{" ||
            braces[i] === "[") {
            //console.log(braces[i])
            openingBrackets.push(braces[i]);
            //console.log(openingBrackets)
        } else {
            closingBrackets.push(braces[i]);
            //console.log(closingBrackets);
        }
    }
    console.log(openingBrackets);
    console.log(closingBrackets);
    let final = (closingBrackets.reverse())
    //console.log(final)

    for (let index = 0; index < closingBrackets.length; index++) {
        if (closingBrackets[index] === ')') {
            closingBrackets[index] = '('
        } else if (closingBrackets[index] === ']') {
            closingBrackets[index] = '['
        } else if (closingBrackets[index] === '}') {
            closingBrackets[index] = '{'
        }
    }
    //
    console.log(final)
    console.log(openingBrackets);
    console.log(closingBrackets)

    let result = areEqual(openingBrackets, closingBrackets)
    if (result === false){
        let final = (closingBrackets.reverse())
        let result2 = areEqual(openingBrackets, final);
        return result2;
        
    }
    else if (result = true){
        return true;
    }
    //return result;

    // let result = areEqual(openingBrackets, final);
    // return result;
}
 {
    return false;
}
}
braces = "({})[({})]"
// braces = "[(]{)}"
//braces = "(){}[]"
//braces = "())({}}{()][][" 
//braces = "())({}}{()][]["
//braces = "()" //j and x both =1
validBraces(braces);