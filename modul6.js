
// Задание №1 -----------------------------------------------

// let arr = [undefined, 1, 2, 3, 4, 5, "str", null];
// function showCount() {
//     let countEven = 0;
//     let countOdd = 0;
//     let countAnother = 0;
//     let countNull = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] == null && typeof arr[i] != `undefined`) {
//             countNull++;
//             console.log(`${arr[i]}`+" - нулевой элемент");
//         } else {
//             if( typeof arr[i] != `number`) {
//                 countAnother++;
//             } else{
//                 if(arr[i]%2==0) {
//                     countEven++;
//                 } else {
//                     countOdd++;
//                 }
//             }
//         }
//     }

//     console.log(countEven);
//     console.log(countOdd);
//     console.log(countAnother);
//     console.log(countNull);
// }
// showCount();


// Задание 2.------------------------------------------------


// let isPrime = function (a) {
//     if (a <= 1000 && a > 2) {
//         for (let i = 2; i < a; i++) {
//             if (a % i === 0) {
//                 return console.log(`${a}` + " - составное");
//             }
//         }
//         return console.log(`${a}` + " - простое");
//     } else {
//         if (a == 1) {
//             console.log( 1  + " - ни является ни простым, ни составным");
//         } else {
//             console.log("не подходит по условию");
//         }
//     };
// }
// isPrime(100);


// Задание №3 ------------------------------------------------


// function showResult (f) {
//     return function(num1) {
//         return function (num2) {
//             return f(num1,num2);
//         };
//     };
// }

// function sum(num1,num2) {
//     return num1+num2;
// } 
// let curriedSum = showResult(sum);

// console.log(curriedSum(2)(12));


// Задание №4 -----------------------------------------------



// const show = function (num1, num2) {
//     let timerId = setInterval(function() {
//         console.log(num1);
//         if(num1 == num2) {
//             clearInterval(timerId);
//         }
//         num1++;
//     },1000);
// };
// show(5,15);


// Задание №5 --------------------------------------------------


// let getInputs = (x, n) =>{
//     if(x == 0) {
//         console.log(1);
//     } else {
//         console.log(x**n);
//     }
// } 


// getInputs(3,0);
