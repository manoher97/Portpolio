import React from 'react';
import Home from './Componets/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Componets/About';
import Resume from './Componets/Resume';
import Projects from './Componets/Projects';
import Contact from './Componets/Contact';
import ErrarPage from './Componets/ErrarPage';
import Header from './Componets/Header';


const RotesC = () => {
  return (
    <div className='router_dec'>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Resume" element={<Resume />} />
          <Route exact path="/Projects" element={<Projects />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path='*' element={<ErrarPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RotesC
