import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
const navbar = () => {
  return (
    <Navbar id="navbar-bg" sticky="top">
      <NavbarBrand>
        <Link to="/">
          <img
            src="/assets/1_5017157491247546480.png"
            alt="not loaded"
            width="30%"
            height="100%"
          />
        </Link>
      </NavbarBrand>
      <Nav>
        <NavItem>
          <Link to="/about">
            <NavLink id="navlink-color">About</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/affiliation">
            <NavLink id="navlink-color">Affiliate</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <NavLink>
            <FaTelegramPlane color={"white"} />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <FaTwitter color={"white"} />
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default navbar;
