import React from 'react';
import Wedding from './Wedding';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const component = shallow(<Wedding />);
  expect(component).toMatchSnapshot();
});
