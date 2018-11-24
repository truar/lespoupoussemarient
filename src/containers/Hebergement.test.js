import React from 'react';
import Hebergement from './Hebergement';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const component = shallow(<Hebergement />);
  expect(component).toMatchSnapshot();
});
