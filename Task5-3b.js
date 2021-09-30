
const prompt = require('prompt-sync')();
const num = prompt('Please enter number');
const numOfSummand = prompt('Please enter number of summands');

let average = parseFloat(num/numOfSummand).toFixed(2);
let array = [];
let lastItem = num;

for (let i=0; i<numOfSummand-1;i++)
{
    array[i] = parseFloat(Math.random() * (average)+1).toFixed(2);
}

for (let i=0; i<=array.length-1;i++)
{
    lastItem = parseFloat(lastItem-array[i]).toFixed(2);
}
array.push(lastItem);
console.log(`Summands for number ${num} are: ${array}`);






