function getSum( a,b ){
    if (a == b) return a; //(1)
    if (a < b) {
       return a + getSum(a+1, b); //resursion; call the function inside of the function
    }else {
       return a + getSum(a-1,b); //recursion again
    }
 }