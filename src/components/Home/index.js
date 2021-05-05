/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link, useLocation } from "react-router-dom";
import profilePic from "../../images/Chris.png";

import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <div className="title">
        <h1>
          <p>Hi,</p>
          <p>I am Christian</p>
          <p>Full Stack Web Developer</p>
        </h1>
        <Link to="about">
          <button>More Info</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;