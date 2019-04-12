import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import Keypad from './Keypad';

describe('Keypad', () => {
  let wrapper: ShallowWrapper;

  // create mock functions with jest.fn()
  beforeEach(() => (wrapper = shallow(<Keypad callOperator={jest.fn()} numbers={[]} operators={[]} setOperator={jest.fn()} updateDisplay={jest.fn()} />)));

  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
