import React from "react";
import author from "../../Chris.png"
import resume from "../../documents/Kapita_Christian_Resume.pdf";

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
          I am a full-stack web developer with passion to build web applications from mock-up to rollout.
           Recently graduated from Carleton university coding boot camp in full stack development, developed skills in HTML/CSS, Responsive design with Bootstrap, JQuery,JavaScript, ReactJs, Express,MongoDB and NodeJS. 
           Patient, creative, problem solver, analytical thinker and adapt at working independently as well collaborating with team using Scrum and agile process. 
           I am excited to work alongside an expert team of developers where I can learn, grow, and continue to master the craft.
          </p>
          <br/>
          <a href={resume} target="_blank" className="btn-main-resume" rel="noreferrer">My Resume</a>
        </div>
      </div>
    </div>
  )
}

export default AboutMe