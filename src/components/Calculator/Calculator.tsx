import * as React from 'react';

import Display from '../Display/Display';
import './Calculator.css';
import Keypad from '../Keypad/Keypad';

interface ICalculatorState {
  displayValue: string;
  numbers: number[];
  operators: string[];
  selectedOperator: string;
  storedValue: string;
}

export default class Calculator extends React.Component<{}, ICalculatorState> {
  public readonly state: ICalculatorState = {
    // value to be displayed in <Display />
    displayValue: '0',
    // values to be displayed in number <Keys />
    numbers: [],
    // values to be displayed in operator <Keys />
    operators: [],
    // operator selected for math operation
    selectedOperator: '',
    // stored value to use for math operation
    storedValue: '',
  };

  public render() {
    const { displayValue, numbers, operators } = this.state;
    return (
      <div className="calculator-container">
        <Display displayValue={displayValue} />
        <Keypad callOperator={this.callOperator} setOperator={this.setOperator} updateDisplay={this.updateDisplay} numbers={numbers} operators={operators}  />
      </div>
    );
  }

  public setOperator = () => {
    console.log('set operation');
  };

  public updateDisplay = () => {
    console.log('update display');
  };

  public callOperator = () => {
    console.log('call operation');
  };
}
