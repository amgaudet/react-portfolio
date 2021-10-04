import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from "react-bootstrap";
import '../style.css';

const Header = () => {
  return (
    <Navbar className="container-fluid" collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand>
        <h1>Alan Gaudet</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="flex justify-content-end" id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="m-2" to="/home">Home</Link>
          <Link className="m-2" to="/about">About</Link>
          <Link className="m-2" to="/portfolio">Portfolio</Link>
          <Link className="m-2" to="/contactme">Contact Me</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;
