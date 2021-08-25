import React, { useState } from 'react';
import { /*BrowserRouter, Route, Switch,*/Link } from "react-router-dom";
import './Styles/NavBarStyles.css'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
/*  Collapse,
  NavbarToggler,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText*/
} from 'reactstrap';

class NavBar extends React.Component {

    render() {
        return (
            <div>
     <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">tigertrade</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to =  "/">Home</Link>
            </NavItem>
            <NavItem>
              <Link className = "navbar-item" activeClassName = "is-active" to = "/about">About</Link>
            </NavItem>
            <NavItem>
              <Link href="https://github.com/reactstrap/reactstrap">Login</Link>
            </NavItem>
            <NavItem>
              <Link href="google.com">Google</Link>
            </NavItem>
            <NavItem>
              <Link href="/components">Click here</Link>
            </NavItem>
            
            <NavItem>
              <Link href= "/components"> :) </Link> 
            </NavItem>
          </Nav>          
      </Navbar>
    </div> 
        )
    }
}

export default NavBar;