import React from 'react';
import Sjc from './Sjc';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const component = shallow(<Sjc />);
  expect(component).toMatchSnapshot();
});

