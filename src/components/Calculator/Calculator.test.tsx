import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import Display from '../Display/Display';
import Keypad from '../Keypad/Keypad';
import Calculator from './Calculator';

describe('Calculator', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = shallow(<Calculator />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Display and Keypad Components', () => {
    expect(
      wrapper.containsAllMatchingElements([
        <Display
          key="display"
          displayValue={(wrapper.instance() as Calculator).state.displayValue} // access the state of the calculator component
        />,
        <Keypad
          key="keypad"
          callOperator={(wrapper.instance() as Calculator).callOperator}
          numbers={(wrapper.instance() as Calculator).state.numbers}
          operators={(wrapper.instance() as Calculator).state.operators}
          setOperator={(wrapper.instance() as Calculator).setOperator}
          updateDisplay={(wrapper.instance() as Calculator).updateDisplay}
        />,
      ]),
    ).toEqual(true);
  });
});
