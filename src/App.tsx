import './App.css'
import React, { useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Study from './pages/Study';
import Experience from './pages/Experience';


const App: React.FC = () => {
  useEffect(() => {
    M.AutoInit();
  }
  , []);
  return (
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/study" element={ <Study /> } />
            <Route path="/experience" element={ <Experience /> } />
          </Routes>
        </main>
        <Footer />
      </Router>
    );
  };


export default App
