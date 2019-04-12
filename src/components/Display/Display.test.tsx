import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';
import Display from './Display';

describe('Display', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => (wrapper = shallow(<Display displayValue={''} />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
