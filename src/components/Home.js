// src/components/Home.js
import React from 'react';
import { username, city } from '../data/user'; // Import username and city from user.js

function Home() {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>Hello, I'm {username} from {city}!</p>
    </div>
  );
}

export default Home;
