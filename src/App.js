
import NavBar from "./components/NavBar"
import Header from "./components/Header"
import About from "./components/About"
//import Skills from "./components/Skills"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Particles from "react-particles-js";
import './App.css'

const  App = () =>{
  return (
  <>
<Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />
      <NavBar />
      <Header />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
