import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUser } from "../../features/userSlice";
import { Example } from "../framerMotion/Example";
import FindAStore from "../framerMotion/FindAStore";
import SignUpButton from "../signUpButton/SignUpButton";
import SignInButton from "../signInButton/SignInButton";
import LogoutButton from "../logoutButton/LogoutButton";
import "./Header.css";

const Header = ({ menuPage }) => {
  const user = useSelector(selectUser);

  return (
    <div className={`header ${menuPage && "header__menuPage"}`}>
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
        {!user ? (
          <>
            <Link to="/account/signin">
              <SignInButton />
            </Link>
            <Link to="/account/create">
              <SignUpButton />
            </Link>
          </>
        ) : (
          <div className="header__logout">
            {menuPage ? <LogoutButton /> : <Link to="/menu">Order Now</Link>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
