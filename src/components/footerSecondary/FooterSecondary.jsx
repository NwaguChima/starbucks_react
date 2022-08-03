import React from "react";
import "./FooterSecondary.css";
import FindAStore from "../framerMotion/FindAStore";

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
          <div className="footerSecondary__right"></div>
        </div>
      </div>
    </div>
  );
};

export default FooterSecondary;
