import './Keypad.css';

import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import Keypad from './Keypad';

describe('Keypad', () => {
  let wrapper: ShallowWrapper;

  // create mock functions with jest.fn()
  beforeEach(
    () =>
      (wrapper = shallow(
        <Keypad
          callOperator={jest.fn()}
          numbers={[]}
          operators={[]}
          setOperator={jest.fn()}
          updateDisplay={jest.fn()}
        />,
      )),
  );

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(3);
  });

  it('renders the values of numbers', () => {
    wrapper.setProps({ numbers: [1, 2, 3] });
    expect(wrapper.find('.numbers-container').text()).toEqual('123');
  });

  it('renders the values of operators', () => {
    wrapper.setProps({ operators: ['+', '-', '*', '/'] });
    expect(wrapper.find('.operators-container').text()).toEqual('+-*/');
  });

  it('should render an instance of the Key component', () => {
    expect(wrapper.find('Key').length).toEqual(1);
  });
});
