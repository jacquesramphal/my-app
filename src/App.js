// App.jsx
 
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; 
import logo from './i/logo.svg';
import Thumbnail from './Thumbnail.js';

import './App.css';
 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="navigation-sub">
                                          
            <a href="/" className="item">Projects</a>
            <a href="/" className="item">Articles</a>
            <a href="/" className="item">About</a>
  
          </div>
        </div>
        <div>
          <h1>Projects</h1>
          <Thumbnail
            link="/twitter"
            image="http://twitter-image-url.jpg"
            title="Twitter Newsfeed"
            category="Mobile App"
          />
          
          <Thumbnail
            link="/airbnb"
            image="http://airbnb-image-url.jpg>"
            title="Airbnb Experiences"
            category="Website"
          />
          
          <Thumbnail
            link="/photoshop"
            image="http://photoshop-image-url.jpg"
            title="Photoshop Redesign"
            category="Desktop App"
          />
        </div>
      </div>
    </BrowserRouter>

  );
}
 
export default App;