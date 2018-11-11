import React from 'react';
import JourJ from './JourJ';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const component = shallow(<JourJ />);
  expect(component).toMatchSnapshot();
});
