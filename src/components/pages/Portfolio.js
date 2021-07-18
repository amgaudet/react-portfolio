import React from 'react';
import trails from '../assets/trails.png';

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="container">
        <img src={trails} alt='Trail hiking app'>
        </img>
        <a href="https://western-nc-trail-app.herokuapp.com/">Trail Hound App</a>
        <a href="https://github.com/amgaudet/trail-hiking-app" >
          <i class="fab fa-github"></i>
        </a>
      </div>
    </div>
  )
}

export default Portfolio
