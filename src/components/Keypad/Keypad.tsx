import * as PropTypes from 'prop-types';
import * as React from 'react';

interface IKeypad {
  numbers: number[];
  operators: string[];
  callOperator(): void;
  setOperator(): void;
  updateDisplay(): void;
}

const Keypad: React.SFC<IKeypad> = () => <div className="keypad-container" />;

Keypad.propTypes = {
  callOperator: PropTypes.func.isRequired,
  numbers: PropTypes.array.isRequired,
  operators: PropTypes.array.isRequired,
  setOperator: PropTypes.func.isRequired,
  updateDisplay: PropTypes.func.isRequired,
};

export default Keypad;
