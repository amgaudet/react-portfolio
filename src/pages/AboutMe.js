import React from 'react';
import self from '../assets/self.png';
import '../style.css';

const AboutMe = () => {
  return (
    <div className="about">
      <h2 className="m-5 px-5">About Me</h2>
      <div className="d-flex flex-row align-items-center m-5">
        <img className="m-3" src={self} alt='avatar'></img>
        <p className="m-3 para">I am 33 years old from Charlotte, NC and recent graduate of the UNC-Charlotte Full
          Stack Web Development program. Previously, I worked as a personal trainer at commercial gyms across
          North Carolina. I come from a competitive hands on environment and plan to implement those practices
          into my new found career path. In my spare time, I can be found playing a few select games, such as
          Starcraft II or outside playing ultimate frisbee.</p>
      </div>
    </div>
  )
}

export default AboutMe
