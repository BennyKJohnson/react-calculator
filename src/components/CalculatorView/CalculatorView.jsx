import React, { Component } from 'react';
import './CalculatorView.css';
import {ButtonType, Button} from './Button';
import { Input } from './Input';
import Calculator from './../../calculator';

class CalculatorView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      operand: '',
      detailedInput: '',
    };

    this.calculator = new Calculator();
  }

  clear() {
    this.setState({
      input: '',
      operand: '',
      detailedInput: '',
    });
  }

  appendToOperand(value) {
    const newInput = this.state.input + value;
    const newOperand = `${this.state.operand}${value}`
    this.setState({input: newInput, operand: newOperand});
  }

  hanldeEqual() {
    const result = this.calculator.calculate();
    this.setState({input: result});
  }

  addPi() {
    this._addOperand(Math.PI);
  }

  enter() {
    const operand = Number(this.state.operand);
    this._addOperand(operand);

  }

  _addOperand = (operand) => {
    this.calculator.addNumber(operand);
    this.setState({
      input: '',
      operand: '',
      detailedInput: this.state.detailedInput + ' ' + operand,
    });
  }

  handleOperatorClicked = (operator) => {
    this.calculator.addOperator(operator);
    this.setState({
      ...this.state,
      detailedInput: this.state.detailedInput + ' ' + operator,
    });
  };

  render() {
    return (
      <div className="app">
        <div className="calculator">
          <Input 
            input={this.state.input}
            detailedInput={this.state.detailedInput}></Input>
          <div className="calculator-row">
            <Button onClick={() => this.clear()} buttonType={ButtonType.Function}>AC</Button>
            <Button onClick={() => this.enter()} buttonType={ButtonType.Function}>Enter</Button>
            <Button onClick={() => this.addPi()} buttonType={ButtonType.Function}>PI</Button>
            <Button onClick={() => this.handleOperatorClicked('/')} buttonType={ButtonType.Operator}>/</Button>
          </div>
          <div className="calculator-row">
            {this.renderInputButton(7)}
            {this.renderInputButton(8)}
            {this.renderInputButton(9)}
            <Button onClick={() => this.handleOperatorClicked('*')} buttonType={ButtonType.Operator}>*</Button>
          </div>
          <div className="calculator-row">
            {this.renderInputButton(4)}
            {this.renderInputButton(5)}
            {this.renderInputButton(6)}
            <Button onClick={() => this.handleOperatorClicked('+')} buttonType={ButtonType.Operator}>+</Button>
          </div>
          <div className="calculator-row">
            {this.renderInputButton(1)}
            {this.renderInputButton(2)}
            {this.renderInputButton(3)}
            <Button onClick={() => this.handleOperatorClicked('-')} buttonType={ButtonType.Operator}>-</Button>
          </div>
          <div className="calculator-row">
             <Button onClick={() => this.appendToInput(0)} buttonType={ButtonType.Input} isOversized={true}>0</Button>
            {this.renderInputButton('.')}
            <Button onClick={() => this.hanldeEqual()} buttonType={ButtonType.Operator}>=</Button>
          </div>
        </div>
      </div>
    );
  }

  renderInputButton(title) {
    return (
      <Button onClick={() => this.appendToOperand(title)} buttonType={ButtonType.Input}>{title}</Button>
    );
  }
}

export default CalculatorView;