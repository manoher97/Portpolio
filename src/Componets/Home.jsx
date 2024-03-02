import React, { useState } from 'react';



const Home = () => {
  const [isTrue, setInTrue] = useState(true)

  return (
    <div className='deck_dec'>
      <div >
        <h2>Hi,</h2>
        <h2>I'm Kumar,</h2>
        <h2>Web Developer</h2>
        <p>Front End Developer</p>
      </div>
      <div>
        <p>I'm from Andhra Pradesh, India, and I believe web design can be more diverse and inspiring. With a mission to explore the endless possibilities of web design, I am constantly pursuing new experiments and ideas.</p>
      </div>
    </div>
  )
}

export default Home
