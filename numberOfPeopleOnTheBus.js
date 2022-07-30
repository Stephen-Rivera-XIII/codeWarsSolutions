//as a function declaration
function busStops(arr) {
    let answer = 0; 
    for (let i = 0; i < arr.length; i++) {  
      for (let j = 0; j < 1; j++) {
        answer += arr[i][0];
        answer -= arr[i][1]
      }
    }
    return answer;
  }

let number=([[10,0],[3,5],[5,8]])

busStops(number);

// ------------------------
//below this line is the dumb fuck way to do it aka function expression
// var number = function busStops(arr){
//     let answer = 0; 
//         for (let i = 0; i < arr.length; i++) {  
//           for (let j = 0; j < 1; j++) {
//             answer += arr[i][0];
//             answer -= arr[i][1];
//           }
//         }
//         return answer;
//     }