import React from 'react';
import soccer from './soccer.jpg';

const InterestBox = (props) =>{

    const style={
        backgroundColor: "black",
    }

    return(
        <div style={style}>   
            <h1 id="black_font">{props.name}</h1>
        </div>  
    )
};

export default InterestBox;