import './Keypad.css';

import * as PropTypes from 'prop-types';
import * as React from 'react';
import Key from '../Key/Key';

interface IKeypad {
  numbers: number[];
  operators: string[];
  callOperator(): void;
  setOperator(): void;
  updateDisplay(): void;
}

const Keypad: React.SFC<IKeypad> = ({
  numbers,
  operators,
  callOperator,
  setOperator,
  updateDisplay,
}) => {
  const numberKeys = numbers.map(n => <p key={n}>{n}</p>);
  const operatorKeys = operators.map(o => <p key={o}>{o}</p>);
  return (
    <div className="keypad-container">
      <div className="numbers-container">{numberKeys}</div>
      <div className="operators-container">{operatorKeys}</div>
      <Key keyAction={callOperator} keyType="" keyValue="" />
    </div>
  );
};

Keypad.propTypes = {
  callOperator: PropTypes.func.isRequired,
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
};

export default Keypad;
