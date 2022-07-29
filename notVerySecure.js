// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.
// The string has the following conditions to be alphanumeric:
// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

const alpha = Array.from(Array(31)).map((e, i) => i + 97);
const Alpha = Array.from(Array(26)).map((e, i) => i + 65);
const num = Array.from(Array(10)).map((e, i) => i + 48);

function alphanumeric(string){
    if(string == ""){
        return false;
    }
    else{
    for(i=0; i < string.length; i++){
        if(alpha.indexOf(string.charCodeAt(i)) !== -1){
            continue;
        } 
        else if((Alpha.indexOf(string.charCodeAt(i)) !== -1)){
                continue;
        }
        else if ((num.indexOf(string.charCodeAt(i)) !== -1)){
            continue;
        }
        else{
            return false;
        }
    }return true;
}
}