import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Navbar = () => {
  return (
    <div className="mb-4 navbar">
      <h1 className="navbar-brand">Alan Gaudet</h1>
      <div className="collapse navbar-collapse d-flex justify-content-center">
        <ul className="navbar-nav">
          <Link className="nav-item mx-2" to="/home">
            Home
          </Link>&ensp;|&ensp;
          <Link className="nav-item mx-2" to="/about">
            About Me
          </Link>&ensp;|&ensp;
          <Link className="nav-item mx-2" to="/portfolio">
            Portfolio
          </Link>&ensp;|&ensp;
          <Link className="nav-item mx-2" to="/contactme">
            Contact Me
          </Link>
        </ul>
      </div>
    </div>
    //     <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">Home</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  )
}

export default Navbar;
