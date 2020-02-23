import React from "react";
import { create } from "react-test-renderer";
import CalculatorView from './CalculatorView';

describe("CalculatorView Component", () => {
    let calculatorView;
    beforeEach(() => {
        const component = create(<CalculatorView></CalculatorView>)
        calculatorView = component.getInstance();
    });

    test('it clears state on clear', () => { 
        calculatorView.clear();

        expect(calculatorView.state.input).toBe('');
        expect(calculatorView.state.operand).toBe('');
        expect(calculatorView.state.detailedInput).toBe('');
    });

    test('it appends to current operand', () => {
        calculatorView.state.operand = '1';

        calculatorView.appendToOperand('2');
        expect(calculatorView.state.operand).toBe('12');
    });

    test('it sets input to calculated result', () => {
        calculatorView._addOperand(12);
        calculatorView._addOperand(10);
        calculatorView.handleOperatorClicked('+');
        calculatorView.hanldeEqual();

        expect(calculatorView.state.input).toBe(22);
    });

    test('it adds new operand to detailed input on enter', () => {
        calculatorView.state.detailedInput = '1';
        calculatorView.appendToOperand(5);
        calculatorView.enter();
        
        expect(calculatorView.state.detailedInput).toBe('1 5');
    });

    test('it adds operator to calculator and detailed input', () => {
        calculatorView.state.detailedInput = '5 5';
        const spy = jest.spyOn(calculatorView.calculator, 'addOperator');

        calculatorView.handleOperatorClicked('*');
        expect(spy).toHaveBeenCalledWith('*');
        expect(calculatorView.state.detailedInput).toBe('5 5 *');
    });
});

