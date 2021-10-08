//Task1 - reverse array
console.log('\nTask1 - reverse array:');
const initialArr = [1, 2, 3, 4, 5, 6];
console.log(`Initial array: ${initialArr}`);
const reversedArr = initialArr.reverse();
console.log('Reversed array:');
console.table(reversedArr);

//Task2 - find the max value in array
console.log('\nTask2 - find the max value in array');
const maxArr = [3, 67, 15, 456, 234, 234, 0, 1, 45, 126, 46, 98];
let maxValue = Math.max.apply(Math, maxArr);
console.log(`The max value in the array: ${maxValue}`);

//Task3 - Array & Fibonacci 
console.log('\nTask3 - Array & Fibonacci');
let n = 10;
let m = 15;
let fibArr = [0, 1];

for (let i = 2; i < m; i++) {
    fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
}
let cutFibArr = fibArr.slice(n, m)
console.log('Fibonacchi array from N element till M:');
console.table(cutFibArr);

//Task4 - Match position &name
console.log('\nTask4 - Match position &name');
const number1 = 3487;
firstNum = String(number1);
const number2 = 3794;
secondNum = String(number2);
let arrFirstNum = Array.from(firstNum);
let arrSecondNum = Array.from(secondNum);
let numByValue = 0;
let numByAll = 0;
arrSecondNum.forEach(function (item,index){
    if (arrSecondNum[index]==arrFirstNum[index]){numByAll++}
    if (arrSecondNum[item]==arrFirstNum[item])
    {numByValue++}
});
console.log(`Ttl number by index&value: ${numByAll}`);
console.log(`Ttl number by value only: ${numByValue}`);


//Task5 - sort by asc, desc
console.log('\nTask5 - sort by asc, desc');
const arrNum = [1, 4, 7, 8, 9, 3435, 9789, 45, 35];
console.table(arrNum.sort((a, b) => a - b)); //asc order
console.table(arrNum.sort((a, b) => b - a)); //desc order


//Task 6 - Remove repeated items
console.log('\nTask 6 - Remove repeated items');
let arrChars2 = ['A', 'B', 'A', 'C', 'B', 'apple', 'banana', 'apple', 'green', 'red', 'green', 'green'];
let arrNum2 = [1, 6, 7, 8, 9, 1, 7, 4, 5, 6, 7, 8, 45, 8, 45, 8, 0, 1, 2, 0];
let arrUniqueChars = [...new Set(arrChars2)];
let arrUuniqueNums = [...new Set(arrNum2)];
console.log('Array with unique chars/words:');
console.table(arrUniqueChars);
console.log('Array with unique numbers:');
console.table(arrUuniqueNums);