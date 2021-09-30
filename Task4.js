let myString = 'SomeText';
let isMyFlag = true;
let myNumber = 7;

//Addition
console.log('Addition:');
let sumStrBool = myString+isMyFlag;
console.log(sumStrBool);

let sumStrNum = myString+myNumber;
console.log(sumStrNum);

let sumNumBool = myNumber+isMyFlag;
console.log(sumStrBool);

//Multiplication
console.log('Multiplication:');
let multiStrBool = myString*isMyFlag;
console.log(multiStrBool);

let multiStrNum = myString*myNumber;
console.log(multiStrNum);

let multiNumBool = myNumber*isMyFlag;
console.log(multiNumBool);

//Division
console.log('Division:');

let divStrBool = myString/isMyFlag;
console.log(divStrBool);

let divStrNum = myString/myNumber;
console.log(divStrNum);

let divNumBool = myNumber/isMyFlag;
console.log(divNumBool);

//Explicit type conversion
let dataToConvert = 5;
console.log('Initial type of variable before any modification: ' + typeof(dataToConvert));
dataToConvert = String(dataToConvert);
console.log('Type of variable after modifying to String type: ' + typeof(dataToConvert));
dataToConvert = Boolean(dataToConvert);
console.log('Type of variable after modifying to Boolean type: ' + typeof(dataToConvert));
dataToConvert = Number(dataToConvert);  
console.log('Type of variable after modifying to Number type: ' + typeof(dataToConvert));