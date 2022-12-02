const fs = require('fs');
const allContents = fs.readFileSync('/Users/schliengeranais/Documents/theodo/codecalendar/input1.txt', 'utf-8');
let sums = [];
let currentSum = 0;
allContents.split(/\r?\n/).forEach((line) => {
  if (line.length === 0) {
    sums.push(currentSum)
    currentSum = 0
  } else {
    currentSum += Number(line)
  }
});
const max1 = Math.max(...sums);
console.log(max1)
const index1 = sums.indexOf(max1);
sums.splice(index1, 1); 
console.log(sums.length)
const max2 = Math.max(...sums);
console.log(max2)
const index2 = sums.indexOf(max2);
sums.splice(index2, 1); 
console.log(sums.length)
const max3 = Math.max(...sums);
console.log(max3)
const index3 = sums.indexOf(max3);
sums.splice(index3, 1); 
console.log(sums.length)
console.log(max1+max2+max3)

