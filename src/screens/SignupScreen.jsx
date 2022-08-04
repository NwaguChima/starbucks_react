import React from "react";
import { Link } from "react-router-dom";
import "./SignupScreen.css";

const SignupScreen = () => {
  return (
    <div className="signupScreen">
      <div className="signupScreen__header">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt="logo starbucks"
          />
        </Link>
      </div>
      <h1 className="signupScreen__heading">Create an account</h1>
    </div>
  );
};

export default SignupScreen;
