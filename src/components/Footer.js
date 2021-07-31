import React from 'react';
import '../style.css';

const Footer = () => {
  return (
    <div className="row m-5">
      <h2 className="col-lg-3 col-sm-12">Contact me</h2>
      <div className="col-lg-9 col-sm-12 d-flex align-items-center justify-content-around">
        <a href="https://github.com/amgaudet">GitHub</a>
        <a href="https://www.linkedin.com/in/alan-gaudet-256a53210/">LinkedIn</a>
        <a href="assets/alan-resume.pdf">Resume</a>
      </div>
    </div>
  )
}

export default Footer;