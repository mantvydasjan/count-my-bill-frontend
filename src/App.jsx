import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Measurements from './components/Measurements';

function App() {

  return (
    <div className="App">
      <Router>
       <Navbar />
        <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/about" element={<About />} />
         <Route path="/measurements" element={<Measurements />} />
        </Routes>
      </Router>
    </div>

  )
}

export default App
