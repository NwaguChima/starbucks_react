import React from "react";
import { Link } from "react-router-dom";
import "./MenuItem.css";
import { Fade } from "react-awesome-reveal";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

function MenuItem({ type, image }) {
  return (
    <Fade>
      <Link className="menuItem">
        <img src={image} alt="" className="menuItem__image" />
        <h4 className="menuItem__type">{type}</h4>
      </Link>
    </Fade>
  );
}

export default MenuItem;
