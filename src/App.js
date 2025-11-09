import React from "react";
import { BrowserRouter as Router, Route, Routes, Link  } from 'react-router-dom';
import Home from "./home.js";  
import Service from "./service.js";  
import About from "./about";  
import Contact from "./contact";

import './app.css'  ;
import { HashLink } from "react-router-hash-link";

 
     
     

function App() {
  return (
    <>
    <Router>
    <div className="mainheading">
    <nav>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/service">Service</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      </nav>
      </div>

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>


   
       
    </Router>

   
    </>
  );
}

export default App;
