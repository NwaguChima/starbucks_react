import React from "react";
import "./MenuList.css";
import menuList from "../../menuList.json";
import { Link } from "react-router-dom";

const MenuList = () => {
  return (
    <div className="menuList">
      <div className="menuList__container">
        <h4>Drinks</h4>
        <div className="menuList__items">
          {menuList.map((menuListCategory) =>
            menuListCategory.drinks.map(({ type, path }) => (
              <Link key={path} to={path}>
                {type}
              </Link>
            ))
          )}
        </div>
      </div>

      <div className="menuList__container">
        <h4>Foods</h4>
        <div className="menuList__items">
          {menuList.map((menuListCategory) =>
            menuListCategory.food.map(({ type, path }) => (
              <Link key={path} to={path}>
                {type}
              </Link>
            ))
          )}
        </div>
      </div>

      <div className="menuList__container">
        <h4>At Home Coffee</h4>
        <div className="menuList__items">
          {menuList.map((menuListCategory) =>
            menuListCategory.atHomeCoffee.map(({ type, path }) => (
              <Link key={path} to={path}>
                {type}
              </Link>
            ))
          )}
        </div>
      </div>

      <div className="menuList__container">
        <h4>Merchandise</h4>
        <div className="menuList__items">
          {menuList.map((menuListCategory) =>
            menuListCategory.merchandise.map(({ type, path }) => (
              <Link key={path} to={path}>
                {type}
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuList;
