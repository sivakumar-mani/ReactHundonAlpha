import React from 'react';
import { useState } from 'react';
import logo from '../images/logo.png';
// import '../styles/App.css'
// import '../bootstrap/css/bootstrap.min.css'
import Profile from '../images/profile-icon.png'
import '../styles/header.scss'


import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

import {
  BrowserRouter as Router, Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="header container-fluid">
      <Navbar light expand="md">
        <NavbarBrand href="/"><img src={logo} alt="Hudson Alpha" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <NavItem className="menu-link">
          <NavLink href="/" >Patient Page1</NavLink>
          </NavItem>
          <NavItem className="menu-link">
          <NavLink href="/page2">Patient Page2</NavLink>
          </NavItem>
              
            <NavItem>
              <NavLink href="#"><span class="icon-bell"></span></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#"><span class="icon-message"></span></NavLink>
             
            </NavItem>
            <NavItem>
              <NavLink href="#"> <span class="icon-settings"></span></NavLink>
            </NavItem>

            {/* <NavbarText>Simple Text</NavbarText> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Hello Alexander! <span class="icon-settings"></span>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
