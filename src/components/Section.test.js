import React from 'react';
import Section from './Section';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const component = shallow(<Section />);
  expect(component).toMatchSnapshot();
});
