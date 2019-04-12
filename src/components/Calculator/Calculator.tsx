import './Calculator.css';

import * as React from 'react';

import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';

interface ICalculatorState {
  displayValue: string;
  numbers: string[];
  operators: string[];
  selectedOperator: string;
  storedValue: string;
}

export default class Calculator extends React.Component<{}, ICalculatorState> {
  public readonly state: ICalculatorState = {
    // value to be displayed in <Display />
    displayValue: '0',
    // values to be displayed in number <Keys />
    numbers: ['9', '8', '7', '6', '5', '4', '3', '2', '1', '.', '0', 'ce'],
    // values to be displayed in operator <Keys />
    operators: ['/', 'x', '-', '+'],
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
        <Keypad
          callOperator={this.callOperator}
          setOperator={this.setOperator}
          updateDisplay={this.updateDisplay}
          numbers={numbers}
          operators={operators}
        />
      </div>
    );
  }

  public setOperator = () => {
    // TODO
  };

  public updateDisplay = () => {
    // TODO
  };

  public callOperator = () => {
    // TODO
  };
}
