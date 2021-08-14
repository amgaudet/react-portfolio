import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const Home = () => {

  return (
    <div className="landing text-center">
      <h1>Shreekz coding Solutions</h1>
      <h2>by Alan Gaudet</h2>
      <p className="linkP"><Link to="/about">More about me</Link> &ensp;|&ensp;
        <Link to="/portfolio">See what I've done</Link></p>
      <p className="linkP"><Link to="/contactme">Contact Me</Link></p>

    </div>
  )
}

export default Home;