import React from 'react';
import WrapperContent from './WrapperContent';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const component = shallow(<WrapperContent />);
  expect(component).toMatchSnapshot();
});

it('renders with a title', () => {
  const component = shallow(<WrapperContent title="Title" />);
  expect(component).toMatchSnapshot();
});