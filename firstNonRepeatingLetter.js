function firstNonRepeatingLetter(word) {
    let y = 0;
    str = word.toLowerCase();
    for (var i=0; i<str.length; i++) {
    if ( str.indexOf(str[i]) == str.lastIndexOf(str[i]) ) {
            return word[i];
          }  
      if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
            y++
            continue
      }
    }
    if(y>=str.length){
        return "";
  
    }
    return answer;
}