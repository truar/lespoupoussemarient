import React from 'react';
import Profile from './Profile';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const component = shallow(<Profile />);
  expect(component).toMatchSnapshot();
});

