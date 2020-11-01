import React from 'react';
import './socialmedia.css';

const SocialMedia = (props) =>{

    const style = {
        width: "70px",
        marginTop: "20px",
    }


    return(
        <>
            <img id="socialmedia" style={style} src={props.path}></img>
        </>

    );
};

export default SocialMedia;