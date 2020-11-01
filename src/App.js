import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/navbar";
import Display from "./component/display";
import Button from "./component/button";
import Typical from "react-typical";
import AOS from "aos";
import "aos/dist/aos.css";
import Aboutme from "./component/aboutme";
import Skills from "./component/skills";
import Interests from "./component/interests";
import Contact from "./component/contact";
import { Link } from 'react-router-dom';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const style = {
    textAlign: "center",
    marginTop: "80px",
  };

  const style1 = {
    marginTop: "0px",
  };

  const style2 = {
    fontColor: "white",
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1 style={style}>
          {""}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "Welcome To My Website                   ",
              "Feel free to explore                    ",
            ]}
          />{" "}
        </h1>
        <Display />
        <br></br>
        <a href="https://docs.google.com/document/d/18fmyOSThUfr4_-k9cn8Rog83-OiUMZZwbhBSFOV4Go8/edit"><Button /></a>
      </div>
      <Aboutme />
      <Skills /> 
      <Interests />
      <Contact />
      
    </>
  );
}

export default App;
