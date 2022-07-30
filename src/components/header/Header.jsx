import React from "react";
import { Link } from "react-router-dom";
import { Example } from "../framerMotion/Example";
import FindAStore from "../framerMotion/FindAStore";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Link className="header__logo" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt=""
          />
        </Link>
        <Link className="header__link" to="/menu">
          Menu
        </Link>
        <Link className="header__link" to="/menu">
          Rewards
        </Link>
        <Link className="header__link" to="/menu">
          Gift Cards
        </Link>
      </div>

      <div className="header__right">
        <Example />
        <FindAStore />
        {/* user here */}
      </div>
    </div>
  );
};

export default Header;
