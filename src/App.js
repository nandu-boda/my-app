import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login'; // Ensure the path and case are correct
import './App.css'; 
import Home from './components/home';
import Contact from './components/contact'; // Corrected path
import About from './components/about'; // Corrected path

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
         
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
