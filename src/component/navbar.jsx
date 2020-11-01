import React from "react";
import "./navbar.css";
import logo from "./logo.png";
import { useSpring, animated } from "react-spring";
import {Link} from "react-router-dom";

const style = {};

const Navbar = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <>
      <nav class="navbar navbar-expand-sm flex-column flex-sm-row">
        <a class="navbar-brand font" href="#">
          <animated.div style={props}>
            {" "}
            <img width="200px" src={logo} alt="logo"></img>{" "}
          </animated.div>
        </a>
        <ul class="navbar-nav font">
          <li class="nav-item font">
            <a class="nav-link font" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link font" href="#about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link font" href="#skills">
              Skills
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link font" href="#interests">
              Interests
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link font" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
