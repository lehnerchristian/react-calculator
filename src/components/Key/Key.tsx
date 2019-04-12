import './Key.css';

import * as PropTypes from 'prop-types';
import * as React from 'react';

interface IKey {
  keyType: string;
  keyValue: string;
  keyAction(value: string): void;
}

const Key: React.SFC<IKey> = ({ keyAction, keyType, keyValue }) => (
  <div
    className={`key-container ${keyType}`}
    onClick={() => keyAction(keyValue)}
  >
    <p className="key-value">{keyValue}</p>
  </div>
);

Key.propTypes = {
  keyAction: PropTypes.func.isRequired,
  keyType: PropTypes.string.isRequired,
  keyValue: PropTypes.string.isRequired,
};

export default Key;
