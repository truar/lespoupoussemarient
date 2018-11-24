import React from 'react';
import Contact from './Contact';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const component = shallow(<Contact />);
  expect(component).toMatchSnapshot();
});

