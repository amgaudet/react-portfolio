import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

import boot from '../assets/bootstrap.png';
import css from '../assets/css1.png';
import git from '../assets/git.png';
import html from '../assets/htmllogo.png';
import jquery from '../assets/jquery.png';
import js from '../assets/jslogo.png';
import mongo from '../assets/mongodb.png';
import mysql from '../assets/mysql.png';
import node from '../assets/nodejs.png';
import react from '../assets/react.png'


const Home = () => {

  return (
    <div className="landing text-center">
      <div>
        <h1>Shreekz coding Solutions</h1>
        <h2>by Alan Gaudet</h2>
        <p className="linkP"><Link to="/about">More about me</Link> &ensp;|&ensp;
          <Link to="/portfolio">See what I've done</Link></p>
        <p className="linkP pb-3 mb-5"><Link to="/contactme">Contact Me</Link></p>
      </div>

      <div className="skills py-5">
        <h2 classname="mb-5">Powered By</h2>
        <img className="icons" src={html} alt="htmlTag"></img>
        <img className="icons" src={css} alt="cssTag"></img>
        <img className="icons" src={js} alt="JavaScriptTag"></img>
        <img className="icons" src={jquery} alt="JQueryTag"></img>
        <img className="icons" src={react} alt="reactjsTag"></img>
        <img className="icons" src={boot} alt="bootstrapTag"></img>
        <img className="icons" src={mysql} alt="mySQLtag"></img>
        <img className="icons" src={mongo} alt="MongoDBTag"></img>
        <img className="icons" src={node} alt="NodejsTag"></img>
        <img className="icons" src={git} alt="gitTag"></img>
      </div>

    </div>
  )
}

export default Home;