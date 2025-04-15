// src/components/About.js
import React from 'react';
import { image } from '../data/user'; // Import the image variable from user.js

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <img src={image} alt="Dennis Wachira" />
      <p>This is the about section of my portfolio.</p>
    </div>
  );
}

export default About;
