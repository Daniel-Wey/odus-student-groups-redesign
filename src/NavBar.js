import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

class NavBar extends React.Component {

    render() {
        return (
            <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">tigertrade</NavbarBrand>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className = "navbar-item" activeClassName = "is-active" to = "/about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="google.com">Google</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Click here</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink href= "/components/"> :) </NavLink> 
            </NavItem>
          </Nav>          
      </Navbar>
    </div>
        )
    }
}

export default NavBar;