import React from "react";
import author from "../../Chris.png"
import resume from "../../documents/Christian_KapitaMubakilay_Resume.pdf";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
          A full-stack web developer with passion to build web applications from mock-up to rollout.
          Skilled in implementing technologies such  HTML/CSS, Responsive design with Bootstrap, JQuery,JavaScript, ReactJs, Express,MongoDB and NodeJS. 
           Patient, creative, problem solver, analytical thinker and adapt at working independently as well collaborating with team using Scrum and agile process. 
             Excited to work alongside an expert team of developers where I can learn more, grow, and continue to master the craft. 
          </p>
          <br/>
          <a href={resume} target="_blank" className="btn-main-resume" rel="noreferrer">My Resume</a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe