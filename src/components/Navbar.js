import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Navbar = () => {
  return (
    <div className="mb-4 navbar">
      <h1>Alan Gaudet</h1>
      <nav className="d-flex justify-content-center">
        <ul>
          <Link className="mx-2" to="/react-portfolio">
            Home
          </Link>&ensp;|&ensp;
          <Link className="mx-2" to="/about">
            About Me
          </Link>&ensp;|&ensp;
          <Link className="mx-2" to="/portfolio">
            Portfolio
          </Link>&ensp;|&ensp;
          <Link className="mx-2" to="/contactme">
            Contact Me
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
