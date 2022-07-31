import React from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import Featured from "../components/featured/Featured";
import Heading from "../components/heading/Heading";

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
        <div className="homeScreen__bottomRight">
          <img
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68026.jpg"
            alt="homescreen cover"
          />
        </div>
      </Fade>

      <Fade>
        <Heading heading="TODAY IS YOURS" />
      </Fade>

      <div className="homeScreen__featured">
        <Fade>
          <Featured
            title="NICELY NONDAIRY"
            info="Say yes to sips of delight with our Honey Almondmilk Flat White and new Honey Almondmilk Cold Brew."
            link="Explore the honey drinks"
            path=""
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68069.png"
            background="#f0ebe0"
            color="#1e3932"
            className="featured__hoverLight"
          />
        </Fade>

        <Fade>
          <Featured
            title="NICELY NONDAIRY"
            info="Say yes to sips of delight with our Honey Almondmilk Flat White and new Honey Almondmilk Cold Brew."
            link="Explore the honey drinks"
            path=""
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68069.png"
            background="#f0ebe0"
            color="#1e3932"
            className="featured__hoverLight"
          />
        </Fade>
      </div>
    </div>
  );
};

export default HomeScreen;
