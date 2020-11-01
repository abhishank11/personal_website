import React, { useEffect } from "react";
import "./aboutme.css";
import abhi from "./Abhi.jpg";
import AOS from "aos";
import "aos/dist/aos.css";


const Aboutme = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div id="about" data-aos="flip-left" className="container body_2">
        <h1> About Me </h1>
        <div className="underline"></div>
        <img className="aboutimg" width="300px" src={abhi}></img>
        <div className="aboutp">
          <p>
            My name is Abhishank Khadka. I am an aspiring web developer and web
            designer currently studying at Caldwell University with a major in
            Computer Information System.
          </p>
          <p>
            I am well acquainted with programming languages like python,
            javascript, java and also basic web development technologies such as
            HTML and CSS.
          </p>
          <p>
            I have also been a Resident Assistant at Caldwell University for the
            past 2 years and enjoy building a community within the residence
            halls.
          </p>
          <p>
            I am originally from Nepal and have been living in the United States
            for the past 3 years pursuing my college degree.
          </p>
          <p>
            Besides web development I am interested in playing and watching
            soccer, music and filming and editing videos.
          </p>
          <p>
            Please reach out to me through the various contact information
            provided in this website if you think I can be a member of your team
            or help you create your application. My resume is also available on
            this page.
          </p>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
