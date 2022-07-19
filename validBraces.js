function validBraces(braces) {

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
//    let final = (closingBrackets.reverse())
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
    //console.log(final)
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
braces = "[(])"
// braces = "(){}[]"
//braces = "()))"
//braces = "({[]})"
//braces = "([{]})"
validBraces(braces);