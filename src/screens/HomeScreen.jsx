import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Fade className="homeScreen__top">
        <h4>
          We're working hard to to put the health and well-being of our partners
          and customers first in all that we do. <Link to="/">Learn more</Link>
        </h4>
      </Fade>

      <Fade className="homeScreen__bottom">
        <div className="homeScreen__bottomLeft">
          <h4>Investing in our communities</h4>
          <p>
            The Starbucks Foundation awarded grants to over 400 nonprofits
            serving communities of color. Recipients were nominated by Starbucks
            partners (employees).
          </p>
          <button>Learn more</button>
        </div>
        <div className="homeScreen__bottomRight"></div>
      </Fade>
    </div>
  );
};

export default HomeScreen;
