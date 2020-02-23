import Calculator from './calculator';

test('can calculate addition', () =>{
    const calculator = new Calculator();
    calculator.addNumber(4);
    calculator.addNumber(5);
    calculator.addOperator('+');
    expect(calculator.calculate()).toBe(9);
});

test('can calculate subtraction', () => {
    const calculator = new Calculator();
    calculator.addNumber(15);
    calculator.addNumber(3);
    calculator.addOperator('-');

    expect(calculator.calculate()).toBe(12);
});

test('can calculate multiplication', () => {
    const calculator = new Calculator();
    calculator.addNumber(10);
    calculator.addNumber(2);
    calculator.addOperator('*');

    expect(calculator.calculate()).toBe(20);
})

test('can calculate division', () => {
    const calculator = new Calculator();
    calculator.addNumber(15);
    calculator.addNumber(3);
    calculator.addOperator('/');

    expect(calculator.calculate()).toBe(5);
});

test('can calculate when stack has multiple operations', () => {
    const calculator = new Calculator();
    calculator.addNumber(5);
    calculator.addNumber(3);
    calculator.addNumber(2);
    calculator.addOperator('*');
    calculator.addOperator('+');

    expect(calculator.calculate()).toBe(11);
});