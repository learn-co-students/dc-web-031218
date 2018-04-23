// var mammal = "camel";

// if (mammal == "whale") {
//   console.log("in the ocean");
// } else if (mammal == "marsupial") {
//   console.log("has eggs");
// } else if (mammal == "camel") {
//   console.log("humps");
// }

// switch (mammal) {
//   case "whale":
//     console.log("in the ocean");
//     break;
//   case "marsupial":
//     console.log("has eggs");
//     break;
//   case "camel":
//     console.log("humps");
//     break;
//   default:
//     console.log("did not match");
// }

// var numberOfAnimals = 10;
//
// // if (10 === true) {
// switch (numberOfAnimals) {
//   case "10":
//     console.log("in the ocean");
//     break;
//   case "marsupial":
//     console.log("has eggs");
//     break;
//   case "camel":
//     console.log("humps");
//     break;
//   default:
//     console.log("did not match");
// }
//
// // def printMammal
// //   puts
// // end
//
// function printMammal(animal) {
//   console.log(animal);
// }
//
// // const printMammal = (mammal, mammal2) => {
// // console.log(mammal2);
// // console.log(mammal);
// // };
//
// // const printMammal = function(mammal) {
// //   console.log(mammal);
// // };
// let name = "Porcupine";
//
// // printMammal.mammalName = "Rabbit";
// // console.log(printMammal.mammalName);
//
// printMammal(name.toUpperCase() + 7);
//
//
//

const squareNum = x => {
  console.log(x ** 2);
};

[1, 2, 3].map(squareNum);

// def returnFunction
// ...
// end

// return returnFunction
// [1,2,3].map { |x| x ** 2 }

// 1. just 'before the return'
// 2. 'before the return' and 'before the call'
// 3. all three

function usesCallback(func) {
  console.log("before the return");

  const returnFunction = function() {
    console.log("before calling the callback");
    return func; // callback
  };

  return returnFunction;
}

let named = function() {
  console.log("from the callback function");
};

usesCallback(named)()();
