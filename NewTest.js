//Task4 - Match position &name
console.log('\nTask4 - Match position &name');
const number1 = 9666;
firstNum = String(number1);
const number2 = 9888;
secondNum = String(number2);
let arrFirstNum = Array.from(firstNum);
let arrSecondNum = Array.from(secondNum);
let numByValue = 0;
let numByAll = 0;
arrSecondNum.forEach(function (item,index){
    if (arrSecondNum[item]===arrFirstNum[item])
    {numByValue++}
});
console.log(`Num by value (all): ${numByValue}`);