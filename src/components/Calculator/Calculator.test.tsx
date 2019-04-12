import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

import Calculator from './Calculator';

describe('Calculator', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = shallow(<Calculator />)));

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
