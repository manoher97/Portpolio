import React, { useState } from 'react';
import { FaAlignJustify } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Header = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const check = (p) => {
        setShowNavbar(p)
    }
    return (
        <div className='nav_dec'>
            {
                showNavbar ? (<button onClick={() => check(false)} className='nav_dec1'><FaAlignJustify /></button>)
                    : (<div className='Heder_dec'>
                        <div>
                            <button onClick={() => check(true)} className='nav_dec1'><FaAlignJustify /></button>
                        </div>
                        <div className='d-flex'>
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/About">About</Link>
                            <Link className="nav-link" to="/Resume">Resume</Link>
                            <Link className="nav-link" to="/Projects">Projects</Link>
                            <Link className="nav-link" to="/Contact">Contacts</Link>
                        </div> 

                    </div>
                    )
            }

        </div >
    )
}

export default Header;
