import React from 'react';
import self from '../assets/self.png';

const AboutMe = () => {
  return (
    <div>
      <h2>About Me</h2>
      <img src={self} alt='avatar'></img>
      <p>I am 33 years old from Charlotte, NC. I am currently enrolled in the UNCC
        Coding Boot Camp for web development and scheduled to graduate end of July '21. Previously, I worked
        as a personal trainer at commercial gyms across North Carolina. I come from a competitive hands on
        environment and plan to implement those practices into my new found career path. In my spare time, I
        can be found playing a few select games, such as Starcraft II or outside playing ultimate frisbee.</p>
    </div>
  )
}

export default AboutMe
