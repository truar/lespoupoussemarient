import React from 'react';
import PageTitle from './PageTitle';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const component = shallow(<PageTitle />);
  expect(component).toMatchSnapshot();
});
