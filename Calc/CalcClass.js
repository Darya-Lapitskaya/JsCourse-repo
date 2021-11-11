class Calculator {
  constructor() {
    this._result = 0;
  }

  getLastResult() {
    console.log(`The last result is: ${this._result}`);
    return this._result;
  };
  sum(a, b) {
    if (typeof a !== 'number' ||typeof b !== 'number') throw new Error('Unsuported parameter type');
    this._result = a + b;
    console.log(`Sum of ${a} and ${b} is: ${this._result}`);
    return this._result;
  }

  divide(a, b) {
    if (typeof a !== 'number' ||typeof b !== 'number') throw new Error('Unsuported parameter type');
    if (b===0) throw new Error('Cannot divide by 0');
    this._result = a / b;
    console.log(`Divide result for ${a} and ${b} is: ${this._result}`);
    return this._result;
  }
  multiply(a, b) {
    if (typeof a !== 'number' ||typeof b !== 'number') throw new Error('Unsuported parameter type');
    this._result = a * b;
    console.log(`Multiply result for ${a} and ${b} is: ${this._result}`);
    return this._result;
  }
  subtraction(a, b) {
    if (typeof a !== 'number' ||typeof b !== 'number') throw new Error('Unsuported parameter type');
    this._result = a - b;
    console.log(`Subtraction result for ${a} and ${b} is: ${this._result}`);
    return this._result;
  }

  cleanUp() {
    this._result = 0;
  }
}

module.exports = Calculator;
