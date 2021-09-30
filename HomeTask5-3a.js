
const prompt = require('prompt-sync')();
const num = prompt('Please enter number');
const numOfSummand = prompt('Please enter number of summands');

let average = Math.floor(num/numOfSummand);
let array = [];
let lastItem = num;

for (let i=0; i<numOfSummand-1;i++)
{
    array[i] = Math.floor(Math.random() * (average)+1);
}

for (let i=0; i<=array.length-1;i++)
{
    lastItem = lastItem-array[i];
}
array.push(lastItem);
console.log(`Summands for number ${num} are: ${array}`);






