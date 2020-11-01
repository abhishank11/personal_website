import React, { useEffect } from "react";
import "./contact.css";
import abhi from "./Abhi.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import SocialMedia from "./socialmedia.jsx";
import github from "./github.png";
import twitter from "./twitter.png";
import handshake from "./handshake (1).png";
import instagram from "./instagram.png";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div id="contact" data-aos="flip-right" className="container body_2 wrap_contact">
        <h1 id="black_font"> Contact </h1>
        <div className="underline"></div>

        <div className="new_font">   
        <div className="row">
            
            <div className="col text-center"> LEAVE A MESSAGE 
            <div className="underline"></div>
            <form className="form">
                <div className="form_text">
                <div className="col"> <label>First Name</label><br /><input placeholder="first name" /> </div>
                <div className="col"> <label>Last Name</label><br /><input placeholder="last name" /> </div>
                <div className="col"> <label>Email</label><br /><input type="email" placeholder="email" /> </div>
                <div className="col"> <label>Message</label><br /><textarea placeholder="message" /> </div>
                <div className="col"> <button className="btn-danger" type="submit">Submit</button> </div>
                </div>
               

            </form>
            </div>

            <div className="col">
                <div className="separator">

                </div>
            </div>

            <div className="col text-center"> SOCIAL MEDIA
            <div className="underline"></div>
            <div className="col"><a href="https://github.com/abhishank11"><SocialMedia path={github}/></a></div>
            <div className="col"><a href="#"><SocialMedia path={twitter}/></a></div>
            <div className="col"><a href="https://caldwell.joinhandshake.com/users/22186649"><SocialMedia path={handshake}/></a></div>
            <div className="col"><a href="https://www.instagram.com/abhishank11/"><SocialMedia path={instagram} /></a></div>
            </div>
           
        </div>
         </div>
      
        

      </div>
    </>
  );
};

export default Contact;
