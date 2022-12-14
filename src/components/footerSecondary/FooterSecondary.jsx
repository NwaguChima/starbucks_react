import React from "react";
import "./FooterSecondary.css";
import FindAStore from "../framerMotion/FindAStore";
import { Link } from "react-router-dom";

const FooterSecondary = ({ alignItems, paddingLeft, flexDirection }) => {
  return (
    <div
      className="footerSecondary"
      style={{ alignItems, paddingLeft: `${paddingLeft * 2}px` }}
    >
      <div
        className="footerSecondary__container"
        style={{ paddingLeft: `${paddingLeft}px` }}
      >
        <div className="footerSecondary__info">
          <div className="footerSecondary__left">
            <FindAStore />
          </div>
          <div className="footerSecondary__right" style={{ flexDirection }}>
            <Link to={"#"}>Responsibility</Link>
            <Link to={"#"}>Web Accessibility</Link>
            <Link to={"#"}>Privacy Policy</Link>
            <Link to={"#"}>Terms of Use </Link>
            <Link to={"#"}>Cookie Preferences</Link>
          </div>
        </div>
        <span className="footerSecondary__copyright">© 2021 Starbucks</span>
      </div>
    </div>
  );
};

export default FooterSecondary;
