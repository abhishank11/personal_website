import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SkillBox from "./SkillBox";
import "./skills.css";
import react_icon from "./react.png";
import html from "./html.png";
import django from "./django.jpg";
import r from "./r.png";
import pandas from "./panda.png";
import statistics from "./statistics.png";
import python from "./python.png";

const Skills = () => {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
   
      <div id="skills" data-aos="flip-right" class="container text-center">    
        <h1> Skills </h1>
        <div className="underline"></div>
        <div className="row">
        <div class="hover col my-col1 "><SkillBox name="React" image={react_icon} percent="80%"></SkillBox> </div>
        <div class="hover col my-col2"><SkillBox name="HTML/CSS" image={html}></SkillBox> </div>
        <div class="hover col my-col8"><SkillBox name="Django" image={django}></SkillBox> </div>
        </div>

        <div className="row">
        <div class="hover col my-col3"><SkillBox name="R-Programming" image={r}></SkillBox> </div>
        <div class="hover col my-col4"><SkillBox name="Pandas" image={statistics}></SkillBox> </div>
        <div class="hover col my-col5"><SkillBox name="Python" image={python}></SkillBox> </div>
        </div>

        </div>
        


     

    </>
  );
};

export default Skills;
