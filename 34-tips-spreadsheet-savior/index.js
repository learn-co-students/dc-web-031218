const data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712],
];

const dataTwo = [[2, 3, 7, 8], [0, 1, 3], [9, 2, 8, 3]];

function checkSum(dataArray) {
  return dataArray.reduce((acc, row) => (acc += Math.max(...row) - Math.min(...row)), 0);
  // let sum = 0;
  // dataArray.forEach(row => (sum += Math.max(...row) - Math.min(...row)));
  // return sum;
}

console.log(checkSum(data));
console.log(checkSum(dataTwo));
