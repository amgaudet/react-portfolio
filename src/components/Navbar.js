import React from 'react'

const Navbar = ({ currentPage, handlePageChange }) => {
  return (
    <div className="d-flex flex justify-space-between">
      <h1>Alan Gaudet</h1>
      <nav>
        <ul className="d-flex flex-row">
          <li>
            <a
              href="#aboutme"
              onClick={() => handlePageChange('AboutMe')}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => handlePageChange('Portfolio')}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              onClick={() => handlePageChange('Contacts')}
            >
              Contact Me
            </a>
          </li>
        </ul></nav>
    </div>
  )
}

export default Navbar;
