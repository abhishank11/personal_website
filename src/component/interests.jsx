import React, { useEffect } from "react";
import "./aboutme.css";
import abhi from "./Abhi.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import "./interests.css";
import InterestBox from "./interestBox";
import soccer from "./soccer copy.jpg";
import music from "./music copy.jpg";
import photo from "./photo.jpg";
import editing from "./edit.jpg";
import creativity from "./creative.jpg";
import leadership from "./leadership2.jpg";
import hardwork from "./hardwork2.jpg";
import learning from "./learner.jpg";



const Interests = () => {


  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div id="interests" data-aos="flip-left" className="container body_3">
        <div className="row">
          <div className="col">
          <h2 id="black_font"> Personal Interests </h2>
          <div className="underline"></div>
          <div className="col text-center wrap"><img id="interests" src={soccer}></img><h1> Soccer </h1></div>
          <div className="col text-center wrap"><img id="interests" src={music}></img><h1> Music </h1></div>         
          <div className="col text-center wrap"><img id="interests" src={photo}></img><h1> Photography </h1></div>
          <div className="col text-center wrap"><img id="interests" src={editing}></img><h1> Editing </h1></div>          </div>
          <div className="col">
          <h2 id="black_font"> Professional Skills </h2>
          <div className="underline"></div>
          <div className="col text-center wrap"><img id="interests" src={creativity}></img><h1> Creativity </h1></div>
          <div className="col text-center wrap"><img id="interests" src={leadership}></img><h1> Leadership </h1></div>         
          <div className="col text-center wrap"><img id="interests" src={hardwork}></img><h1> Hardwork </h1></div>
          <div className="col text-center wrap"><img id="interests" src={learning}></img><h1> Fast Learning </h1></div>          </div>

        </div>
       
        


      </div>
    </>
  );
};

export default Interests;
