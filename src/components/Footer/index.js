/* eslint-disable jsx-a11y/anchor-is-valid */
  
import React from "react";
import {
  // LinkedinShareButton,
  // LinkedinIcon,
} from "react-share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Ottawa - Canada </p>
            </div>
            <div className="d-flex">
              <a href="tel:555-555-555">+1 (343) 777 - 8262</a>
            </div>
            <div className="d-flex">
              <p>Kapitachristian@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" className="footer-nav">Home</Link>
                {/* <a className="footer-nav">Home</a> */}
                <br />
                <Link smooth={true} to="about" className="footer-nav">About me</Link>
                {/* <a className="footer-nav">About me</a> */}
                <br />
                <Link smooth={true} to="portfolio" className="footer-nav">Portfolio</Link>
                {/* <a className="footer-nav">Portfolio</a> */}
                <br />
                <Link smooth={true} to="contacts" className="footer-nav">Contacts</Link>
                {/* <a className="footer-nav">Contacts</a> */}
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <a className="icon-link" href="https://github.com/ChristianKapita" target="_blank" rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faGithubSquare} size="3x"/>          
            </a> 
            <br />
            <a className="icon-link" href="https://www.linkedin.com/in/christian-kapita-mubakilay-77b637a5/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="3x"/>          
            </a> 
            
              {/* <LinkedinShareButton
                url={"https://www.linkedin.com/in/christian-kapita-mubakilay-77b637a5/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton> */}
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Christian Kapita | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
