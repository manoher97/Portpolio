import React, { useState } from 'react';
import { GrTopCorner, GrBottomCorner } from "react-icons/gr";
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import { useNavigate } from 'react-router-dom';
import Contact from './Contact';
const Home = () => {
  const [isTrue, setInTrue] = useState(true)
   const navigate=useNavigate()
  return (
    <div className='home_dec' >
      <div className='deck_dec'>
        <GrTopCorner className='upIcon' />
        <h2>Hi,</h2>
        <h2>I'm Kumar,</h2>
        <h2>Web Developer</h2>
        <p>Front End Developer</p>
        <p>I'm from Andhra Pradesh, India, and I believe in web design can be more diverse and inspiring. With a mission to explore the endless possibilities of web design, I am constantly pursuing new experiments and ideas.</p>
        <span>Click to Contact</span><button onClick={()=> Contact(navigate("/Contact"))}> Button</button>
        <GrBottomCorner className='downIcon' />
      </div>
      {/* <div>
        <About />
        <Resume />
        <Projects />
      </div> */}
    </div>
  )
}

export default Home
