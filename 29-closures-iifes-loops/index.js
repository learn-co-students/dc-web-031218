// let num = 99;
//
// console.log("num before", num);
//
// function sumOfArray(array) {
//   // sum up the numbers
//   return array.reduce((sum, num) => sum + num, 0);
// }
//
// function sumUpToArray(array) {
//   // sum up the numbers
//   let sum = 0;
//   let newArray = [];
//
//   for (let num of array) {
//     sum += num;
//     newArray.push(sum);
//   }
//   return newArray;
// }
//
// const a = [1, 2, 3, 4];
// const b = [11, 22, 33, 44];
//
// console.log("a: ", a);
// console.log(sumUpToArray(a));
// // 1000 lines
// console.log(sumOfArray(a));
// console.log("a, after: ", a);
//
// console.log("b", b);
// console.log(sumOfArray(b));
// console.log(sumUpToArray(b));
// console.log("b, after:", b);
//
// console.log("num after", num);

// function createAdder(num) {
//   return function(x) {
//     return x + num;
//   };
// }
// // function add2(x) {
// //   return x + 2;
// // }
// //
// // function add3(x) {
// //   return x + 3;
// // }
//
// const add2 = createAdder(2);
// const add3 = createAdder(3);
//
// console.log(add3(6));
// console.log(add2(100));
//
//
//

// Memoization
// expensive function
// speed it up by keeping track of our solutions

// 0 1 2 3 4 5 6 7  8  9  10
// 0 1 1 2 3 5 8 13 21 34 55
// next number is the sum of the last 2 numbers
// function should return the nth fibonacci number

// IIFE
// immediately invoked function expression
// Closure
const fibonacci = (function() {
  let answers = {};

  // inner function 'closes over' the outer function's variables
  return function fibonacci(n) {
    if (answers.hasOwnProperty(n)) {
      return answers[n];
    }
    console.log("fib for ", n);
    if (n == 0 || n == 1) {
      return n;
    } else {
      let answer = fibonacci(n - 1) + fibonacci(n - 2);
      answers[n] = answer;
      return answer;
    }
  };
})();

// write the function fibonacci
// memoized fibonacci
// extract memoization function
