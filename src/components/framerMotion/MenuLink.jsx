import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./MenuLink.css";

const MenuLink = ({ link, path, icon, goBackIcon, onClick, width }) => {
  return (
    <>
      <Link to={path}>
        <motion.li
          style={{ width }}
          onClick={onClick}
          variants={variants}
        ></motion.li>
      </Link>
    </>
  );
};

export default MenuLink;
