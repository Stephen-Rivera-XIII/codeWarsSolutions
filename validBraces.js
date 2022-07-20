function validBraces(braces) {

    const stack = []
    const openBrackets = ['(','{','[']
    
    for(let i=0; i < braces.length; i++){
        let x = braces[i];
         if (openBrackets.includes(braces[i])) {
            stack.push(x)
            continue;
            }
      
        if (stack.length == 0)
            return false;
        
        let check;
        switch (x){
            case ')':
                check = stack.pop();
                if (check == '{' || check == '[')
                    return false;
                    break
                
            case ']':
                check = stack.pop();
                if (check == '(' || check == '{')
                    return false;
                    break
                
            case '}':
                check = stack.pop();
                if (check == '(' || check == '[')
                    return false;
                    break
            
        }
    }
        return (stack.length == 0);
        
}