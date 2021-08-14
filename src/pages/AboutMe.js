import React from 'react';
import self from '../assets/self.png';
import '../style.css';

const AboutMe = () => {
  return (
    <div className="about">
      <h2 className="m-5 px-5">About Me</h2>
      <div className="d-flex flex-row align-items-center m-5">
        <img className="m-3" src={self} alt='avatar'></img>
        <p className="m-3 para">I am 33 years old Full Stack Web Developer currently in Clemmons, NC. I graduated
          from the UNC-Charlotte Full Stack Web Development Program in July 2021. Currently, I am refining my strengths
          in my own projects and expanding my skills set. A current list of my skill set can be found here.
          Previously, I worked as a personal trainer at commercial gyms across
          North Carolina. I come from a competitive hands on environment and plan to implement those practices
          into my new found career path. In my spare time, I can be found playing a few select games, such as
          Starcraft II or outside playing ultimate frisbee.</p>
      </div>
    </div>
  )
}

export default AboutMe
