
//     If the number is divisible by both 3 and 5, log "FizzBuzz" instead of the number
//     If the number is divisible by 3 but not by 5, log "Fizz" instead of the number
//     If the number is divisible by 5 but not by 3, log "Buzz" instead of the numbe

var n = 24;
function fizzBuzz(n){
    for(var i = 0; i < n; i++){
        if(i % 5 === 0 && i % 3 ===0){
            console.log("Fizbuzz");
        }
        if(i % 5 === 0){
            console.log("Buzz");
        }
        if(i % 3===0){
            console.log("Fizz");
        }else{
            console.log(i);
        }
    }
}

// fizzBuzz(n);

var m = 24;
function fizzBuzz(m){
    if(m<0){
        return false;
    }
    for(let i = 0; i < m; i++){
        if(i % 5 === 0 && i % 3 === 0 ){
            console.log("Fizz Buzz");
        } 
        if(i % 5 === 0){
            console.log("Buzz");
        }
        if(i %3 === 0){
            console.log("fizz");
        }else{
            console.log(i);
        }
    }
}

fizzBuzz(m);


//for practice only:
// var m = 24;
// function fizzBuzz(m){
//     if(m<0){
//         return false;
//     }
//     var arr = [];
//     for(var i = 0; i < m; i++){
//         if(i % 5 === 0 && i % 3 === 0 ){
//             // console.log("Fizz Buzz");
//             // arr.push(i +", ");
//         } 
//         if(i % 5 === 0){
//             // console.log("Buzz");
//             // arr.push(i +", ");
//         }
//         if(i %3 === 0){
//             // console.log("fizz");
//             // arr.push(i +", ");
//         }else{
//             // console.log(i);
//             arr.push(i +", ");
//         }
//     }
//     console.log(arr);
//     return arr;
// }

// fizzBuzz(m);d