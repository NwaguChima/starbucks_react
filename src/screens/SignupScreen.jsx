import React from "react";
import { Link } from "react-router-dom";
import FooterSecondary from "../components/footerSecondary/FooterSecondary";
import SignupForm from "../components/signupForm/SignupForm";
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
      <div className="signupScreen__rewards">
        <h4>JOIN STARBUCK@ REWARDS</h4>
        <p>
          Join Starbucks@ Rewards to earn free food and drinks, get free
          refills, pay and order with your phoem, and <Link to={"#"}>more</Link>
          .
        </p>
      </div>
      <SignupForm />
      <FooterSecondary alignItems="center" flexDirection="column" />
    </div>
  );
};

export default SignupScreen;
