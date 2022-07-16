// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

//ok so what am I trying to do here
//I'm trying to identify the first letter of each word in a string
//then toUpper() that letter
var str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
        return this
        .toLowerCase()    //to lower all
        .split(' ')        //split each word off
        .map(word => {    //reusable function to capitalize the first letter of each word then concat with slice
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(' ');       //put it all back together
    console.log(titleCase);
    return titleCase;     //return
    
  };

//I don't understand why this didn't work
String.prototype.toJadenCase = function () {
    return this
    .toLowerCase()    //to lower all
    .split(' ')        //split each word off
    .map(word =>    //reusable function to capitalize the first letter of each word then concat with slice
        word[0].toUpperCase() + word.slice(1))
    .join(' ');  
}
//the solution I wound up submitting

String.prototype.toJadenCase();