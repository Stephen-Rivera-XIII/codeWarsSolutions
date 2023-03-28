function duplicateEncode(str) {
    let stack = [];
    str = str.toLowerCase();
    for (var i=0; i<str.length; i++) {
    if ( str.indexOf(str[i]) == str.lastIndexOf(str[i]) ) {
            stack.push('(')
          }  
      if ( str.indexOf(str[i]) !== str.lastIndexOf(str[i]) ) {
        stack.push(')')
      }
    }
    let answer = stack.join('');
    return answer;
}

duplicateEncode("ballSack");