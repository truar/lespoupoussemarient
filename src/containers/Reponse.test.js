import React from 'react';
import Reponse from './Reponse';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const component = shallow(<Reponse />);
  expect(component).toMatchSnapshot();
});
