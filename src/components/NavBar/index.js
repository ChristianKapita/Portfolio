/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo2.png";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";


const NavBar = () => {
  // const [open, setOpen] = useState(false);
  // const [screenWidth, setScreenWidth] = useState(0);
  // const location = useLocation();

  // const trackScreenWidth = () => {
  //   const width = window.innerWidth;
  //   setScreenWidth(width);
  //   if (width > 600) {
  //     setOpen(true);
  //   }
  // };

  // const handleClose = () => {
  //   if (screenWidth < 600) {
  //     setOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   trackScreenWidth();
  //   window.addEventListener("resize", trackScreenWidth);
  //   return () => window.removeEventListener("resize", trackScreenWidth);
  // }, []);

  return (
    // <nav className="navbar">
    //   <div className="nav-wrapper">
    //      {/* <div className="logo"> 
    //       <Link to="/">
    //         <img
    //           src={logo}
    //           alt="brand"
    //         />
    //       </Link>
    //     </div> */}
    //     <div className="list-wrapper">
    //       <img
    //         src="https://github.com/DwinaTech/public-images/blob/main/menu-bars.png?raw=true"
    //         alt="Menu bars"
    //         style={{ opacity: !open ? 1 : 0 }}
    //         onClick={() => {
    //           setOpen(!open);
    //         }}
    //       />
    //       <img
    //         src="https://github.com/DwinaTech/public-images/blob/main/cross-menu-icon.png?raw=true"
    //         alt="Menu cross"
    //         style={{ opacity: open ? 1 : 0 }}
    //         onClick={() => {
    //           setOpen(!open);
    //         }}
    //       />

    //       <ul style={{ left: open ? "0" : "-100vw" }}>
    //         <li>
    //           <Link
    //             to="/"
    //             onClick={handleClose}
    //             style={{ color: location.pathname === "/" && "#4071f4" }}
    //           >
    //             Home
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/about"
    //             onClick={handleClose}
    //             style={{ color: location.pathname === "/about" && "#4071f4" }}
    //           >
    //             About
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/skills"
    //             onClick={handleClose}
    //             style={{ color: location.pathname === "/skills" && "#4071f4" }}
    //           >
    //             Skills
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/Projects"
    //             onClick={handleClose}
    //             style={{ color: location.pathname === "/Projects" && "#4071f4" }}
    //           >
    //             Project
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/contact"
    //             onClick={handleClose}
    //             style={{ color: location.pathname === "/contact" && "#4071f4" }}
    //           >
    //             Contact
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#"> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contacts</a>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
  );
};

export default NavBar;