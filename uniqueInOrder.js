// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function(iterable){
    console.log(iterable);
    var arr1 = [iterable];
    console.log(arr1);
    var arr2 = arr1.join(' ');
    console.log(arr2);
    var input = arr2.split("");
    console.log(input);
    i = 0;
    //for (var i = 0; i < input.length; i++){
    while(i < input.length){
        if(input[i+1] == "," || input[i] == input[i+1]){
            console.log(input[i]);
            console.log(input[i+1]);
            input.splice([i],0);
            var removed = input.splice([i+1],1);
            console.log(input);
        }
        else{
            i++;
        }
        // else if(input[i] != input[i+1]){
        //     console.log(input[i]);
        //     console.log(input[i+1]);
        // }
    }
    if(isNaN(parseInt(input)/1)){
        console.log(input);
        return input;
    }
    else{
        let myFunc = num => Number(num);
        const intInput = input.join("");
        const almostThere = parseFloat(intInput.replace(/,/g, ''));
        console.log(almostThere);
        console.log(Array.from(String(almostThere)), myFunc);
        return Array.from(String(almostThere), myFunc);
        ;
    }
}

console.log(uniqueInOrder('AAAABBBCCDAABBBB'));
console.log(uniqueInOrder([1,2,2,3,3]));


