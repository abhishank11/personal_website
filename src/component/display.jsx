import React from "react";
import "./display.css";
import { useSpring, animated } from "react-spring";

const Display = () => {
  const props = useSpring({
    opacity: 1,
    marginTop: 0,
    color: "blue",
    from: { opacity: 0, marginTop: -500, color: "white" },
  });

  const style = {
    fontSize: "100px",
    textAlign: "center",
    marginTop: "90px",
  };

  const style1 = {
    color: "white",
    fontSize: "20px",
    textAlign: "center",
  };

  return (
    <>
      <animated.div style={props}>
        <h1 style={style}> Abhishank Khadka </h1>
        <h2 style={style1}>
          {" "}
          Hard work beats talent if Talent does not work hard{" "}
        </h2>
      </animated.div>
    </>
  );
};

export default Display;
