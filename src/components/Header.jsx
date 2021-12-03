import React, { useState } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <React.Fragment>
      <Navbar className="navbar navbar-dark" dark expand="md">
        <div className="container">
          <NavbarBrand href="/home">Clifton Temple Karachi</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ms-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/style">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/culture">
                  Temple
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/tech">
                  Media
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/tech2">
                  Donate
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/tech3">
                  Contact
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
