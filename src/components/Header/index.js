/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";


const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>Hi, I'm Christian</h1>
        <Typed
          className="typed-text"
          strings={["Full Stack Web Developer"]}
          typeSpeed={60}
          backSpeed={60}
          loop
        />
        <Link smooth={true} to="contacts" offset={-110} href="#" className="btn-main-offer">contact me</Link >
      </div>
    </div>
  )
}

export default Header;
