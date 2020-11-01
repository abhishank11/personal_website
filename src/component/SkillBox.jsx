import React,{useState} from 'react';
import "./SkillBox.css";
import react from "./react.png";


const SkillBox = (props) =>{

    const style={
        width: "0%",   
    }

    if(props.name === "React"){
        style.width = "80%"
    }

    else if(props.name === "HTML/CSS"){
        style.width = "100%"
    }
    
    else if(props.name === "Django"){
        style.width = "50%"
    }

    else if(props.name === "R-Programming"){
        style.width = "60%"
    }
    
    else if(props.name === "Pandas"){
        style.width = "80%"
    }

    else if(props.name === "Python"){
        style.width = "80%"
    }

    return(
        <div>   
            <div className="box-wrap">
            <div className="icon">
                <h1 id="font-black">{props.name}</h1> 
                <img width="100px" src={props.image}></img>
                <br></br>
                <span class="bar">
                    <span style={style}>
                    </span>
                </span>
                          
            </div>
        </div>
        </div>  
    )
};

export default SkillBox;