import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="d-flex justify-content-between align-items-center m-5">
      <h1>Alan Gaudet</h1>
      <nav className="col-lg-4 d-flex">
        <ul className="d-flex flex-row p-4">
          <Link className="px-3" to="/">
            About Me
          </Link>
          <Link className="px-3" to="/portfolio">
            Portfolio
          </Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
