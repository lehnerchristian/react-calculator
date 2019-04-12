import * as React from 'react';

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
    return <div className="calculator-container" />;
  }

  private callOperator = () => {
    console.log('call operation');
  };

  private setOperator = () => {
    console.log('set operation');
  };

  private updateDisplay = () => {
    console.log('update display');
  };
}
