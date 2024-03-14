import React from "react";
import {Link} from 'react-router-dom'

 import "./Header.css";

function Header() {
  return (
    <div className="body">
      <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="index.html">WorkTrack</a>
          </h1>
      
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>

              <li>
                <a className="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>

              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
              <li>
              <Link to="/login" className="getstarted scrollto">
                  Login/Signup
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
      
        </div>
      </header>
 
    

    
     
    </div>
  );
}

export default Header;
