import React from 'react';
import Wait from './Wait';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const component = shallow(<Wait />);
  expect(component).toMatchSnapshot();
});

