// src/components/App.js
import React from 'react';
import About from './About'; // Import default About component
import Home from './Home'; // Import default Home component
import NavBar from './NavBar'; // Import default NavBar component

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
