import React from "react";
import "./navbar.css";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
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
  NavbarText,
} from "reactstrap";
const navbar = () => {
  return (
    <Navbar id="navbar-bg">
      <NavbarBrand>
        <img
          src="/assets/1_5017157491247546480.png"
          alt="not loaded"
          width="40%"
          height="100%"
        />
      </NavbarBrand>
      <Nav>
        <NavItem>
          <NavLink
            id="navlink-color"
            href="https://github.com/reactstrap/reactstrap"
          >
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            id="navlink-color"
            href="https://github.com/reactstrap/reactstrap"
          >
            Affiliate
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            <FaTelegramPlane color={"white"} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            <FaTwitter color={"white"} />
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default navbar;