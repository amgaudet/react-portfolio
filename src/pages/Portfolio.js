import React from 'react';
import trails from '../assets/trails.png';
import resume from '../assets/resume.png';
import pokemon from '../assets/pokemon.png';
import fitness from '../assets/fitness.png';

const Portfolio = () => {
  return (
    <div>
      <h2 className="m-5 px-5">Portfolio</h2>
      <div className="container d-flex flex-wrap justify-content-around">
        <div className="card mx-3 my-5">
          <h3 className="text-center">Trail Hiking App</h3>
          <img classname="card-img" src={trails} alt='Trail hiking app'>
          </img>
          <div className="card-body d-flex justify-content-around">
            <a href="https://western-nc-trail-app.herokuapp.com/">Deployed App</a>
            <a href="https://github.com/amgaudet/trail-hiking-app" >Github Repo</a>
          </div>
        </div>
        <div className="card mx-3 my-5">
          <h3 className="text-center">Rapid Resume</h3>
          <img classname="card-img" src={resume} alt='Resume Builder'>
          </img>
          <div className="card-body  d-flex justify-content-around">
            <a href="https://rapid-resume.herokuapp.com/">Deployed App</a>
            <a href="https://github.com/morrisbianco/resume-builder" >Github Repo</a>
          </div>
        </div>
        <div className="card mx-3 my-5">
          <h3 className="text-center">Pokemon Builder</h3>
          <img classname="card-img" src={pokemon} alt='Pokemon Team Builder'>
          </img>
          <div className="card-body  d-flex justify-content-around">
            <a href="https://amgaudet.github.io/pokemon-team-builder/index.html">Deployed App</a>
            <a href="https://github.com/amgaudet/pokemon-team-builder" >Github Repo</a>
          </div>
        </div>
        <div className="card mx-3 my-5">
          <h3 className="text-center">Fitness Tracker</h3>
          <img classname="card-img" src={fitness} alt='Fitness Tracker'>
          </img>
          <div className="card-body  d-flex justify-content-around">
            <a href="https://boiling-spire-57268.herokuapp.com/">Deployed App</a>
            <a href="https://github.com/amgaudet/workout-tracker" >Github Repo</a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Portfolio
