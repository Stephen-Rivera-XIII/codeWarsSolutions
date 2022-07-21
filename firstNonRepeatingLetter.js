function firstNonRepeatingLetter(word) {
    //let stack = [];
    let y = 0;
    str = word.toLowerCase();
    for (var i=0; i<str.length; i++) {
    if ( str.indexOf(str[i]) == str.lastIndexOf(str[i]) ) {
            console.log(str[i])
            console.log(word[i]);
            return word[i];
          }  
      if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
            y++
            continue
      }
    }
    if(y>=str.length){
        console.log(y);
        //const answer =  "none";
        return "";
        ;
    }
    //let answer = stack.join('');
    console.log(answer)
    return answer;
}