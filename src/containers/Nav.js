import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav as NavStrap, NavItem, NavLink } from 'reactstrap';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.navItems = props.navItems;
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const {selectedNavItem} = this.props;

    const renderNavItems = this.navItems.map((item, i) => {
      return (
        <NavItem key={i}>
          <NavLink onClick={this.toggleNavbar} href={item.href}>{item.label}</NavLink>
        </NavItem>
      );
    });

    const renderNavItemsDesk = this.navItems.map((item, i) => {
      const isSelected = selectedNavItem.href === item.href;
      return (
        <NavItem key={i}>
          <NavLink active={isSelected} href={item.href}>{item.label} <span id={item.spanId} className='img_nav' /></NavLink>
        </NavItem>
      );
    });    

    return (
      <>
        <Navbar color="dark" className="mobile" dark fixed="top">
          <NavbarBrand href="/" className="mr-auto">{selectedNavItem.label}</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <NavStrap navbar>
                {renderNavItems}
            </NavStrap>
          </Collapse>
        </Navbar>
        <Navbar color="dark" className="desktop" dark fixed="top">
          <NavStrap navbar>
              {renderNavItemsDesk}
          </NavStrap>
        </Navbar>
      </>
    );
  }
}

export default Nav;