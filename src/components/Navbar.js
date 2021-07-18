import React from 'react'

const Navbar = () => {
  return (
    <div className="d-flex flex justify-space-between">
      <h1>Alan Gaudet</h1>
      <nav>
        <ul className="d-flex flex-row">
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contacts">Contact Me</a>
          </li>
        </ul></nav>
    </div>
  )
}

export default Navbar;
