import './Keypad.css';

import * as PropTypes from 'prop-types';
import * as React from 'react';
import Key from '../Key/Key';

interface IKeypad {
  numbers: string[];
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
  const numberKeys = numbers.map(n => (
    <Key
      key={n}
      keyAction={updateDisplay}
      keyType="number-key"
      keyValue={n.toString()}
    />
  ));
  const operatorKeys = operators.map(o => (
    <Key key={o} keyAction={setOperator} keyType="operator-key" keyValue={o} />
  ));
  return (
    <div className="keypad-container">
      <div className="numbers-container">{numberKeys}</div>
      <div className="operators-container">{operatorKeys}</div>
      <div className="submit-container">
        <Key keyAction={callOperator} keyType="submit-key" keyValue="=" />
      </div>
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
