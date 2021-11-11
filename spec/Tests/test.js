let Calculator = require('../../Calc/CalcClass');

describe("Test Calculator class", function () {
    let calc = null;
    beforeEach(function () {
        calc = new Calculator();
    })


    //     Для чисел проверки:
    //     a - первое число
    //     b -  второе число
    //     res - результат

    //     a:
    //     класс1: дробные, целые
    //     класс2: отрицательные, 0, положительные

    //     b:
    //     класс1: дробные, целые
    //     класс2: отрицательные, 0, положительные

    //    res:
    //     класс1: дробные, целые
    //     класс2: отрицательные, 0, положительные


    it("Test sum (positive scenarios)", function () {
        const testCases = [
            { a: -5, b: -7, res: -12 },
            { a: -5, b: 0, res: -5 },
            { a: -5, b: 5, res: 0 },
            { a: -5, b: 50, res: 45 },
            { a: -5, b: -0.5, res: -5.5 },
            { a: -5, b: 7.5, res: 2.5 },
            { a: 0, b: -10, res: -10 },
            { a: 0, b: 0, res: 0 },
            { a: 0, b: 3, res: 3 },
            { a: 0, b: -8.91, res: -8.91 },
            { a: 0, b: 9.123456, res: 9.123456 },
            { a: 12, b: 2, res: 14 },
            { a: 12, b: 3.5, res: 15.5 },
            { a: -1.5, b: -2.5, res: -4 },
            { a: -4.5, b: 10.5, res: 6 }
        ];
        testCases.forEach(test => {
            calc.sum(test.a, test.b);
            expect(calc._result).toBe(test.res);
        });

    });

    it("Test subtraction (positive scenarios)", function () {
        const testCases = [
            { a: -5, b: -7, res: 2 },
            { a: -5, b: 0, res: -5 },
            { a: -5, b: 5, res: -10 },
            { a: -5, b: 50, res: -55 },
            { a: -5, b: -0.5, res: -4.5 },
            { a: -5, b: 7.5, res: -12.5 },
            { a: 0, b: -10, res: 10 },
            { a: 0, b: 0, res: 0 },
            { a: 0, b: 3, res: -3 },
            { a: 0, b: -8.91, res: 8.91 },
            { a: 0, b: 9.123456, res: -9.123456 },
            { a: 12, b: 2, res: 10 },
            { a: 12, b: 3.5, res: 8.5 },
            { a: 12, b: -2, res: 14 },
            { a: 12, b: -2.5, res: 14.5 },
            { a: 12, b: 24, res: -12 },
            { a: -1.5, b: -2, res: 0.5 },
            { a: -1.5, b: 1, res: -2.5 },
            { a: -1.5, b: -2.5, res: 1 },
            { a: -1.5, b: 10.52, res: -12.02 },
            { a: -1.5, b: -10, res: 8.5 },
            { a: 1.5, b: 20, res: -18.5 },
            { a: 1.5, b: -0.5, res: 2 },
            { a: 1.5, b: 2.5, res: -1 },
        ];
        testCases.forEach(test => {
            calc.subtraction(test.a, test.b);
            expect(calc._result).toBe(test.res);
        });

    });
    it("Test multiply (positive scenarios)", function () {
        const testCases = [
            { a: -5, b: -7, res: 35 },
            { a: -5, b: 0, res: 0 },
            { a: -5, b: 5, res: -25 },
            { a: -5, b: 50, res: -250 },
            { a: -5, b: -0.5, res: 2.5 },
            { a: -5, b: 7.5, res: -37.5 },
            { a: 0, b: -10, res: 0 },
            { a: 0, b: 0, res: 0 },
            { a: 0, b: 3, res: 0 },
            { a: 0, b: -8.91, res: 0 },
            { a: 0, b: 9.123456, res: 0 },
            { a: 12, b: 2, res: 24 },
            { a: 12, b: 3.5, res: 42 },
            { a: -1.5, b: -2.5, res: 3.75 },
            { a: -4.5, b: 10.5, res: -47.25 }
        ];
        testCases.forEach(test => {
            calc.multiply(test.a, test.b);
            expect(calc._result).toBe(test.res);
        });
    });

    it("Test divide (positive scenarios)", function () {
        const testCases = [
            { a: -5, b: -7, res: 0.7142857142857143 },
            { a: -5, b: 5, res: -1 },
            { a: -5, b: 50, res: -0.1 },
            { a: -5, b: -0.5, res: 10 },
            { a: -5, b: 7.5, res: -0.6666666666666666 },
            { a: 0, b: -10, res: 0 },
            { a: 0, b: 3, res: 0 },
            { a: 0, b: -8.91, res: 0 },
            { a: 0, b: 9.123456, res: 0 },
            { a: 12, b: 2, res: 6 },
            { a: 12, b: 2.5, res: 4.8 },
            { a: 12, b: -2, res: -6 },
            { a: 12, b: -2.5, res: -4.8 },
            { a: 12, b: 24, res: 0.5 },
            { a: -1.5, b: -2, res: 0.75 },
            { a: -1.5, b: 1, res: -1.5 },
            { a: -1.5, b: -2.5, res: 0.6 },
            { a: -1.5, b: -10, res: 0.15 },
            { a: 1.5, b: 20, res: 0.075 },
            { a: 1.5, b: -0.5, res: -3 },
            { a: 1.5, b: 2.5, res: 0.6 },
        ];
        testCases.forEach(test => {
            calc.divide(test.a, test.b);
            expect(calc._result).toBe(test.res);
        });

    });

    it("Test format sum", function () {
        const testCases = [
            { a: -5, b: '7'},
            { a: '-5', b: 5 }
        ];
        let isErr = false;

        testCases.forEach(test => {
            try {
                calc.sum(test.a, test.b);
            } catch (err) {
                isErr = true;
                expect(err.message).toBe('Unsuported parameter type');
            }
            expect(isErr).toBe(true);
        });
      
    });

    it("Test format divide", function () {
        const testCases = [
            { a: -5, b: '7'},
            { a: '-5', b: 5 }
        ];
        let isErr = false;

        testCases.forEach(test => {
            try {
                calc.divide(test.a, test.b);
            } catch (err) {
                isErr = true;
                expect(err.message).toBe('Unsuported parameter type');
            }
            expect(isErr).toBe(true);
        })});

        it("Test format multiply", function () {
            const testCases = [
                { a: -5, b: '7'},
                { a: '-5', b: 5 }
            ];
            let isErr = false;
    
            testCases.forEach(test => {
                try {
                    calc.multiply(test.a, test.b);
                } catch (err) {
                    isErr = true;
                    expect(err.message).toBe('Unsuported parameter type');
                }
                expect(isErr).toBe(true);
            });
          
        });

        it("Test format subtraction", function () {
            const testCases = [
                { a: -5, b: '7'},
                { a: '-5', b: 5 }
            ];
            let isErr = false;
    
            testCases.forEach(test => {
                try {
                    calc.subtraction(test.a, test.b);
                } catch (err) {
                    isErr = true;
                    expect(err.message).toBe('Unsuported parameter type');
                }
                expect(isErr).toBe(true);
            });
          
        });


    it("Test divide by 0", function () {
        let isErr = false;
        try {
            calc.divide(4, 0);
        } catch (err) {
            isErr = true;
            expect(err.message).toBe('Cannot divide by 0');
        }
        expect(isErr).toBe(true);

    });

});