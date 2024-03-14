import React, { useEffect, useState } from 'react';
import { FaAlignJustify } from "react-icons/fa";
import { Link } from 'react-router-dom';
import mypic from "./Asets/Aimages/bg_2.jpg"
const Header = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setShowNavbar(false)
        }, 3000);
      
        return () => clearInterval(interval);
      }, []);
      const check=(p)=>{
        setShowNavbar(p)
      }
    return (
        <div className='nav_dec'>
            {
                showNavbar ? (<button onClick={()=>check(false)}  className='nav_dec1'><FaAlignJustify /></button>)
                    : (<div className='Heder_dec'>
                        <div>
                            <button onClick={()=>check(true)}  className='nav_dec1'><FaAlignJustify /></button>
                        </div>
                        <div className='d-flex'>
                            <section class="loader">
                                <div class="slider" style={{ '--i': 0 }}>
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>

                                </div>
                                <div class="slider" style={{ '--i': 1 }}>
                                    <Link className="nav-link" to="/About">About</Link>
                                </div>
                                <div class="slider" style={{ '--i': 2 }}>
                                    <Link className="nav-link" to="/Resume">Resume</Link>
                                </div>
                                <div class="slider" style={{ '--i': 3 }}>
                                    <Link className="nav-link" to="/Projects">Projects</Link>
                                </div>
                                <div class="slider" style={{ '--i': 4 }}>
                                    <Link className="nav-link" to="/Contact">Contacts</Link>
                                </div>
                            </section>
                        </div>
                        <div>
                        <img src={mypic} alt="..." />
                        </div>
                    </div>
                    )
            }

        </div >
    )
}

export default Header;
