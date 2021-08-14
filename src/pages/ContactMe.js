import React from 'react';

const ContactMe = () => {
  return (
    <div className="contact">
      <h2 className="m-5">Contact Information</h2>
      <p>Looking to get in touch? The best way to reach me is through direct email at &ensp;
        <a href="mailto:alanmgaudet@gmail.com">alanmgaudet@gmail.com</a>. Here is a list of my other
        contact links:
      </p>
      <ul>
        <li><a href="https://github.com/amgaudet">GitHub</a></li>
        <li><a href="https://www.linkedin.com/in/alan-gaudet-256a53210/">LinkedIn</a></li>
        <li><a href="https://docs.google.com/document/d/e/2PACX-1vSPZojrCuOTECv9pyBme1eAzD3vCNBCjo7ny9spzHHnsHnpavidXCl-R5rXPQoiyzXhTAs_uIuf8n5D/pub">Resume</a></li>
      </ul>
    </div>
  )
}

export default ContactMe;