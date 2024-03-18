import React, { useState } from 'react';


const Resume = () => {
  const [cores, setCores] = useState(true)
  const FlipCart = (p) => {
    setCores(p)
  }
  return (
    <div className='resume_dec'>
      <center>
        <h1>Resume</h1>
      </center>
      <section>

        {
          cores ? (
            <center onClick={() => FlipCart(false)}>
              <div class="mark">
                <div class="mark1">
                  <h1>Front End Developer</h1>
                </div>
              </div>
            </center>
          ) : (
            <section className='tech_dec' onClick={() => FlipCart(true)}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p className="title">HTML</p>
                    <p>Hover Me</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="title">HTML</p>
                    <p>Proficient in HTML, with expertise in creating structured and semantic web pages to ensure optimal user experience and accessibility.</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p className="title">CSS</p>
                    <p>Hover Me</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="title">CSS</p>
                    <p>Skilled in CSS, adept at designing visually appealing and responsive web interfaces, ensuring seamless user interactions and consistent presentation across devices</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p className="title">JavaScript</p>
                    <p>Hover Me</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="title">JavaScript</p>
                    <p>Skilled in JavaScript for creating dynamic web applications, utilizing frameworks for enhanced user experiences.</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p className="title">React</p>
                    <p>Hover Me</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="title">React.js</p>
                    <p>Proficient in React.js for building interactive and responsive user interfaces, leveraging components for efficient front-end development.</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p className="title">React-Redux</p>
                    <p>Hover Me</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="title">React-Redux</p>
                    <p>Proficient in React-Redux, enabling efficient state management and seamless data flow in complex web applications, ensuring enhanced performance and user interaction.</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p className="title">Bootstrap</p>
                    <p>Hover Me</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="title">Bootstrap</p>
                    <p>Skilled in Bootstrap, facilitating rapid development of responsive and visually appealing web interfaces, ensuring consistent design across different devices and browsers.</p>
                  </div>
                </div>
              </div>
            </section>

          )
        }

      </section>

      <div className='projects'>
        <div className="card">
          <div className="card-details">
            <h5 className="text-title">Post Graduation — S V University, Tirupati </h5>
            <h6>YEAR 2018 -  2021</h6>
            <p className="text-body">Graduated with distinction, now equipped with knowledge, ambition, and a postgraduate degree – ready to conquer new horizons and make a meaningful impact.</p>
          </div>
          <button className="card-button">More info</button>
        </div>
        <div className="card">
          <div className="card-details">
            <h5 className="text-title"> IASE College, Kurnool — TPD</h5>
            <h6>YEAR 2017 -  2018</h6>
            <p className="text-body">Empowered with knowledge, fueled by passion –+ officially a certified teacher! Excited to inspire minds and shape futures.</p>
          </div>
          <button className="card-button">More info</button>
        </div>
        <div className="card">
          <div className="card-details">
            <h5 className="text-title">SVO College, Tirupati — BA</h5>
            <h6>YEAR 2014 -  2017</h6>
            <p className="text-body">Earned my BA degree, where every lesson was a stepping stone and every challenge a lesson in resilience. Here's to the journey of knowledge and growth!  </p>
          </div>
          <button className="card-button">More info</button>
        </div>
        <div className="card">
          <div className="card-details">
            <h5 className="text-title">SVO College, Tirupati — TPD</h5>
            <h6>YEAR 2012 -  2014</h6>
            <p className="text-body">Successfully completed the Telugu Pre-Degree Vocational Course, an educational program designed to enhance proficiency in the Telugu language, literature, and cultural aspects. The course provided comprehensive training in Telugu grammar, composition, and communication skills, equipping me with a deeper understanding of the language and its cultural significance. Through practical coursework and immersive learning experiences, I gained valuable insights into Telugu literature, history, and societal customs, enriching my linguistic abilities and cultural awareness.</p>
          </div>
          <button className="card-button">More info</button>
        </div>
        <div className="card">
          <div className="card-details">
            <p className="text-title">ZPH School-Dhandi Kuppam — SSC</p>
            <h6>YEAR 2007 - 2012</h6>
            <p className="text-body">Secured SSC certification from AP Government School with a commendable 6.5 GPA, demonstrating proficiency in Telugu as the medium of instruction, showcasing strong academic performance and language skills.</p>
          </div>
          <button className="card-button">More info</button>
        </div>
      </div>
    </div>
  )
}

export default Resume
