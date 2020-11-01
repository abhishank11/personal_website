import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from 'react-router-dom';

const style = {
  marginLeft: "50%",
};

const Button = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <>
      <animated.div style={props}>
        {" "}
        
        <button style={style} type="button" class="btn btn-danger r">
          Resume
        </button>
      </animated.div>
    </>
  );
};

export default Button;
