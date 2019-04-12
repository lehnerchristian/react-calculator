import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import Calculator from '../Calculator/Calculator';
import App from './App';

describe('App', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = shallow(<App />)));

  // add snapshot testing - this stores a snapshot of the current virtual DOM of this component
  it('should render correctly', () => expect(wrapper).toMatchSnapshot());

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('should render a Calculator component', () => {
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true);
  });
});
