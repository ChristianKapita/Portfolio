/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import budgetTracker from "../../images/Budget_tracker.PNG";
import weather from "../../images/Weather_DashBoard.PNG";
import burger from "../../images/eat_da_burger.PNG";
import EmployeDirectory from "../../images/EmployeDirectory.PNG";
import CodWeb from "../../images/codWeb.PNG";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Portfolio = () => {

  // Budget Tracker
  const openPopupboxBudget = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={budgetTracker} alt="Budget Tracker..." />
        <p>Full stack Progressive Web Apps that allows a user to track his budget being online or offline. All offline transaction, will be synch automatically to MongoDB as soon as the app is online again.</p>
        <b>Live Application:</b> <a className="hyper-link" onClick={() => window.open("https://intense-chamber-42991.herokuapp.com/",  "_blank")}>https://intense-chamber-42991.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ChristianKapita/Budget-Trackers",  "_blank")}>https://github.com/ChristianKapita/Budget-Trackers</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigBudget = {
    titleBar: {
      enable: true,
      text: "Budget Tracker Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Dashboard Weather App
  const openPopupboxWeather = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={weather} alt="Weather..." />
        <p>API based Weather web application that allows user to search for a city and get back current weather and future weather condition with 5 days forecast. Search history are saved in local storage.</p>
        <b>Live application:</b> <a className="hyper-link" onClick={() => window.open("https://christiankapita.github.io/Weather-Dashboard/", "_blank")}>https://christiankapita.github.io/Weather-Dashboard/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ChristianKapita/Weather-Dashboard", "_blank")}>https://github.com/ChristianKapita/Weather-Dashboard</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigWeather = {
    titleBar: {
      enable: true,
      text: "Dashboard Weather Project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Eat Da Burger
  const openPopupboxBurger = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={burger} alt="Portfolio Project..." />
        <p>Full stack web app that follows the MVC design pattern; use Node and MySQL to query and route data, and Handlebars to generate HTML. The app allows user to order a burger and then devour it 😋</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://blooming-cliffs-57891.herokuapp.com/", "_blank")}>https://blooming-cliffs-57891.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ChristianKapita/Burger", "_blank")}>https://github.com/ChristianKapita/Burger</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigBurger = {
    titleBar: {
      enable: true,
      text: "Eat Da Burger"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Employee Directory App
  const openPopupboxEmployee = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={EmployeDirectory} alt="Employee Directory..." />
        <p>API based React application that generates a list of random employees and allows user to search a specific employee or sort the list either by name, phone or email.</p>
        <b>Live Application:</b> <a className="hyper-link" onClick={() => window.open("https://christiankapita.github.io/employee-directory/", "_blank")}>https://christiankapita.github.io/employee-directory/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ChristianKapita/employee-directory", "_blank")}>https://github.com/ChristianKapita/employee-directory</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigEmployee = {
    titleBar: {
      enable: true,
      text: "Employee directory"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }
  //codWeb
  const openPopupboxCodWeb = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={CodWeb} alt="Employee Directory..." />
        <p>API based React application that generates a list of random employees and allows user to search a specific employee or sort the list either by name, phone or email.</p>
        <b>Live Application:</b> <a className="hyper-link" onClick={() => window.open("https://christiankapita.github.io/employee-directory/", "_blank")}>https://christiankapita.github.io/employee-directory/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/ChristianKapita/employee-directory", "_blank")}>https://github.com/ChristianKapita/employee-directory</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigCodWeb= {
    titleBar: {
      enable: true,
      text: "CodWeb"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  return (
    <div id="portfolio"className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxBudget}>
            <img className="portfolio-image" src={budgetTracker} alt="Budget Tracker..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxWeather}>
            <img className="portfolio-image" src={weather} alt="Dashboard Weather..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxBurger}>
            <img className="portfolio-image" src={burger} alt="Burger ..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxEmployee}>
            <img className="portfolio-image" src={EmployeDirectory} alt="Employee Directory..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxCodWeb}>
            <img className="portfolio-image" src={CodWeb} alt="CodWeb..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigBudget} />
      <PopupboxContainer {...popupboxConfigWeather} />
      <PopupboxContainer {...popupboxConfigBurger} />
      <PopupboxContainer {...popupboxConfigEmployee} />
      <PopupboxContainer {...popupboxConfigCodWeb} />
    </div>
    
  )
}

export default Portfolio;