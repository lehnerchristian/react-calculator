import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import Display from '../Display/Display';
import Calculator from './Calculator';

describe('Calculator', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = shallow(<Calculator />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render the Display component', () => {
    expect(
      wrapper.containsMatchingElement(
        <Display
          displayValue={(wrapper.instance() as Calculator).state.displayValue} // access the state of the calculator component
        />,
      ),
    ).toEqual(true);
  });
});
