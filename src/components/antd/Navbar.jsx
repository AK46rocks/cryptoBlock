import React, { useState } from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [show, setShow] = useState(false);

    return (
        <>
         <section className="navbar-bg">
          <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
            <a className="navbar-brand" href="#">Crypto<span className="ticolor">Block</span></a>
            <button className="navbar-toggler" type="button" onClick={() => setShow(!show)} data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show ? "show" : "" }`} >
            <ul className="navbar-nav mx-auto ml-auto me-auto mb-2 mb-lg-0">
                
                <li className="nav-item">
                <NavLink class="nav-link" style={{color:'white'}} to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink class="nav-link" style={{color:'white'}} to="/Cryptocurrency">Coins</NavLink>
                </li>

                <li className="nav-item">
                <NavLink class="nav-link" style={{color:'white'}} to="/news">News</NavLink>
                </li>
                <li className="nav-item">
                <NavLink class="nav-link" style={{color:'white'}} to="/exchanges">Services</NavLink>
                </li>
            </ul>
            
            </div>
        </div>
        </nav>     
        </section>

        </>
    )
}

export default Navbar