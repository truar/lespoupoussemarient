import React from 'react';
import Nav from './Nav';
import { shallow } from 'enzyme';

const navItems = [{
  href: 'test', 
  label: 'test'
}];
it('renders without crashing', () => {
  const component = shallow(<Nav selectedNavItem={navItems[0]} navItems={navItems} />);
  expect(component).toMatchSnapshot();
});
