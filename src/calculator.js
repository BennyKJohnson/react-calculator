import CalculatorStack from './calculator-stack';

export default class Calculator {
    constructor() {
        this.stack = new CalculatorStack();
    }

    addNumber(number) {
        this.stack.push(number)
    }

    addOperator(operator) {
        if (!this._isOperator(operator)) {
            return;
        }

        const number2 = this.stack.pop();
        const number1 = this.stack.pop();
        const result = this._getFuncForOperator(operator)(number1, number2);

        this.stack.push(result)
    }

    calculate() {
        return this.stack.pop();
    }

    clear() {
        return this.stack.clear();
    }

    _isOperator(item) {
        return ['+', '-', '*', '/'].includes(item);
    }

    _getFuncForOperator(operator) {
        switch (operator) {
            case '+':
                return this._add;
            case '-':
                return this._subtract;
            case '*':
                return this._multiply;
            case '/':
                return this._divide;
        }
    }

    _add(n1, n2) {
        return n1 + n2;
    }

    _subtract(n1, n2) {
        return n1 - n2;
    }

    _multiply(n1, n2) {
        return n1 * n2;
    }

    _divide(n1, n2) {
        return n1 / n2;
    }

}