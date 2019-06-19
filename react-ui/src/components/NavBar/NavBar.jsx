// @flow
import React from 'react';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import NavBarLogo from './NavBarLogo';

type Props = {
  className: string,
  children: Node
};

const NavBar = ({ children, className = '' }: Props) => (
  <header className={`l-header navbar-fixed-top ${className}`}>
    <div className="l-header-top">
      <div className="container-fluid">
        <Nav
          bsStyle="tabs"
          className="primary-menu alt"
        >
          <NavBarLogo />
          { children }
        </Nav>
      </div>
    </div>
  </header>
);

export default styled(NavBar)`
.primary-menu.nav.nav-tabs.alt>li>a:hover,
.primary-menu.nav.nav-tabs.alt>li.open>a,
.primary-menu.nav.nav-tabs.alt>li.open>a:active,
.primary-menu.nav.nav-tabs.alt>li.open>a:hover,
.primary-menu.nav.nav-tabs.alt>li.open>a:focus {
    color: #99DFF9 !important;
    background: transparent !important;
    font-weight: normal;
}

.primary-menu.nav.nav-tabs.alt>li>a,
.primary-menu.nav.nav-tabs.alt>li>a.active {
    font-weight: bold;
}

.primary-menu.alt .dropdown-menu > li {
    text-align: left;
}

.primary-menu.alt > li.dropdown:hover > ul.dropdown-menu {
    display: block;
}
`;
