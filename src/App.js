
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css'; // Import your CSS file here
import Navbarbanner from './NavbarbannerComponent'; // Your navbar and banner component
import Home from './HomeComponent'; 

import About from './AboutComponent'; // Example component
import SliderComponent from './SliderComponent';
import SocialMediaIconComponent from './SocialMediaIconComponent';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbarbanner />
        <SliderComponent />
        <SocialMediaIconComponent />
        
     
     
        <Routes>
          <Route path="/home" element={<Home />} />
        
          <Route path="/about" element={<About />} />
        
          </Routes>
     
      </div>
    </Router>
  );
}

export default App;

