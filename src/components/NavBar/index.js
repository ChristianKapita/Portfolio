/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
//import { Link, useLocation } from "react-router-dom";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
  <div className="container">
    <a className="navbar-brand" href="#"> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item active">
          <Link smooth={true} to="home" className="nav-link" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="about" offset={-110} className="nav-link" href="#">About me</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="portfolio" offset={-120} className="nav-link" href="#">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link smooth={true} to="contacts" offset={-130} className="nav-link" href="#">Contacts</Link>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
  );
};

export default NavBar;