function Calculator() {
  this._result = null;
  this.getLastResult = () =>{
    console.log(`The last result is: ${this._result}`);
    return this._result;
  }
  this.sum = (a, b) => {
    this._result = a + b;
    console.log(`Sum of ${a} and ${b} is: ${this._result}`);
    return this._result;
  }
  this.divide = (a, b) => {
    this._result = a/b;
    console.log(`Divide result for ${a} and ${b} is: ${this._result}`);
    return this._result;
  }
  this.multiply = (a, b) => {
    this._result = a*b;
    console.log(`Multiply result for ${a} and ${b} is: ${this._result}`);
    return this._result;
  }
  this.subtraction = (a, b) => {
    this._result = a*b;
    console.log(`Subtraction result for ${a} and ${b} is: ${this._result}`);
    return this._result;
  } 

}

module.exports = Calculator;

let x =  new Calculator();
console.log(x.sum(4,5));
console.log(x.divide(4,5));
console.log(x.getLastResult());
