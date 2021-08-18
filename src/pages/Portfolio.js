import React from 'react';
import trails from '../assets/trails.png';
import resume from '../assets/resume.png';
import pokemon from '../assets/pokemon.png';
import fitness from '../assets/fitness.png';
import budget from '../assets/budget-tracker.png';
import employee from '../assets/employeetracker.png';
import '../style.css';

const Portfolio = () => {
  return (
    <div>
      <h2 className="m-5">Portfolio</h2>

      <div className="container d-flex flex-wrap justify-content-around">

        <div className="card mx-3 my-5">
          <h3 className="text-center">Trail Hiking App</h3>
          <div className="card-body details flex">
            <div className="summary">
              Yelp for trails in Western North Carolina
            </div>
            <div className="duty">
              Group Project. Primary duties included Back End APIs using MongoDB, Mongoose. Express server
            </div>
          </div>
          <img className="card-img" src={trails} alt='Trail hiking app'>
          </img>
          <div className="card-body d-flex justify-content-around">
            <a href="https://western-nc-trail-app.herokuapp.com/">
              <i className="fa fa-desktop"></i></a>
            <a href="https://github.com/amgaudet/trail-hiking-app" >
              <i className="fa fa-github"></i></a>
          </div>
        </div>

        <div className="card mx-3 my-5">
          <h3 className="text-center">Rapid Resume</h3>
          <div className="card-body details flex">
            <div className="summary">
              App designed to allow users to quickly create a professional resume based on user input
            </div>
            <div className="duty">
              Group Project. Primary duties included Back End APIs using MongoDB, GraphQL, and connecting to ReactJS interface
            </div>
          </div>
          <img className="card-img" src={resume} alt='Resume Builder'>
          </img>
          <div className="card-body  d-flex justify-content-around">
            <a href="https://rapid-resume.herokuapp.com/">
              <i className="fa fa-desktop"></i></a>
            <a href="https://github.com/morrisbianco/resume-builder" >
              <i className="fa fa-github"></i></a>
          </div>
        </div>

        <div className="card mx-3 my-5">
          <h3 className="text-center">Pokemon Builder</h3>
          <div className="card-body details flex">
            <div className="summary">
              App to search Pokemon APIs and create/save a custom built team
            </div>
            <div className="duty">
              Group Project. Primary duties included front end JavaScript logic, fetching API data and displaying relevant data to client
            </div>
          </div>
          <img className="card-img" src={pokemon} alt='Pokemon Team Builder'>
          </img>
          <div className="card-body  d-flex justify-content-around">
            <a href="https://amgaudet.github.io/pokemon-team-builder/index.html">
              <i className="fa fa-desktop"></i></a>
            <a href="https://github.com/amgaudet/pokemon-team-builder" >
              <i className="fa fa-github"></i></a>
          </div>
        </div>

        <div className="card mx-3 my-5">
          <h3 className="text-center">Fitness Tracker</h3>
          <div className="card-body details flex">
            <div className="summary">
              App used to log and record recent work outs
            </div>
            <div className="duty">
              Tech used: JavaScript, express server, MongoDB, and mongoose
            </div>
          </div>
          <img className="card-img" src={fitness} alt='Fitness Tracker'>
          </img>
          <div className="card-body  d-flex justify-content-around">
            <a href="https://boiling-spire-57268.herokuapp.com/">
              <i className="fa fa-desktop"></i></a>
            <a href="https://github.com/amgaudet/workout-tracker" >
              <i className="fa fa-github"></i></a>
          </div>
        </div>

        <div className="card mx-3 my-5">
          <h3 className="text-center">Offline Budget Tracker</h3>
          <div className="card-body details flex">
            <div className="summary">
              App used to keep track of recent transactions on and offline
            </div>
            <div className="duty">
              Tech used: JavaScript, express server, MongoDB, and IndexedDB
            </div>
          </div>
          <img className="card-img" src={budget} alt='offline budget tracker'>
          </img>
          <div className="card-body  d-flex justify-content-around">
            <a href="https://vibrant-fromage-51209.herokuapp.com/">
              <i className="fa fa-desktop"></i></a>
            <a href="https://github.com/amgaudet/offline-budget-tracker" >
              <i className="fa fa-github"></i></a>
          </div>
        </div>

        <div>
          <div className="card mx-3 my-5">
            <h3 className="text-center">Employee Tracking System</h3>
            <div className="card-body details flex">
              <div className="summary">
                Back End MySQL database application to store and edit employee information and deptartment hierarchy.
              </div>
              <div className="duty">
                Tech used: JavaScript, MySQL, Inquirer, node.js
              </div>
            </div>
            <img className="card-img" src={employee} alt='Employee System'>
            </img>
            <div className="card-body  d-flex justify-content-around">
              <a href="https://drive.google.com/file/d/107zkEjG-axPE-JLvjdpQiwGX4N8-nnQX/view">
                <i className="fa fa-desktop"></i></a>
              <a href="https://github.com/amgaudet/employee-tracker" >
                <i className="fa fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Portfolio
