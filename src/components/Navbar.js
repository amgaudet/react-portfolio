import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Navbar = () => {
  return (
    <div className="mx-4 navbar">
      <h1>Alan Gaudet</h1>
      <nav className="d-flex justify-content-center">
        <ul>
          <Link className="mx-2" to="/react-portfolio">
            Home
          </Link>
          <Link className="mx-2" to="/about">
            About Me
          </Link>
          <Link className="mx-2" to="/portfolio">
            Portfolio
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
