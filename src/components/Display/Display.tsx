import * as PropTypes from 'prop-types';
import * as React from 'react';

interface IDisplayProps {
  displayValue: string;
}

// typings for Stateless Functional Component (SFC)
const Display: React.SFC<IDisplayProps> = (props: IDisplayProps) => (
  <div className="display-container" />
);

// use propTypes here to have the tests fail
// TypeScript already defines typings, but in the tests they're gone
Display.propTypes = { displayValue: PropTypes.string.isRequired };

export default Display;
