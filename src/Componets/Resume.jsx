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
                    <p className="title">BACK</p>
                    <p>Leave Me</p>
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
                    <p className="title">BACK</p>
                    <p>Leave Me</p>
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
                    <p className="title">BACK</p>
                    <p>Leave Me</p>
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
                    <p className="title">BACK</p>
                    <p>Leave Me</p>
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
                    <p className="title">BACK</p>
                    <p>Leave Me</p>
                  </div>
                </div>
              </div>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p className="title">Unit Test</p>
                    <p>Hover Me</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="title">BACK</p>
                    <p>Leave Me</p>
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
            <p className="text-body">Here are the details of the card</p>
          </div>
          <button className="card-button">More info</button>
        </div>
        <div className="card">
          <div className="card-details">
            <p className="text-title">ZPH School-Dhandi Kuppam — SSC</p>
            <h6>YEAR 2007 - 2012</h6>
            <p className="text-body">Here are the details of the card</p>
          </div>
          <button className="card-button">More info</button>
        </div>
      </div>
    </div>
  )
}

export default Resume
