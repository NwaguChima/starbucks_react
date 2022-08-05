import React from "react";
import "./MenuScreen.css";
import menuList from "../menuList.json";
import MenuItem from "../components/menuItem/MenuItem";
import MenuHeader from "../components/menuHeader/MenuHeader";
import MenuList from "../components/menuList/MenuList";

const MenuScreen = () => {
  return (
    <div className="menuScreen">
      <MenuHeader />
      <div className="menuScreen__container">
        <div className="menuScreen__left">
          <MenuList />
        </div>
        <div className="menuScreen__right">
          <h1>Menu</h1>

          <div className="menuScreen__category">
            <h2>Drinks</h2>
            <div className="menuScreen__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.drinks.map(({ type, path, image }, index) => (
                  <MenuItem key={index} type={type} path={path} image={image} />
                ))
              )}
            </div>
          </div>

          <div className="menuScreen__category">
            <h2>Food</h2>
            <div className="menuScreen__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.food.map(({ type, path, image }, index) => (
                  <MenuItem key={index} type={type} path={path} image={image} />
                ))
              )}
            </div>
          </div>

          <div className="menuScreen__category">
            <h2>At Home Coffee</h2>
            <div className="menuScreen__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.food.map(({ type, path, image }, index) => (
                  <MenuItem key={index} type={type} path={path} image={image} />
                ))
              )}
            </div>
          </div>

          <div className="menuScreen__category">
            <h2>Merchandise</h2>
            <div className="menuScreen__items">
              {menuList.map((menuListCategory) =>
                menuListCategory.food.map(({ type, path, image }, index) => (
                  <MenuItem key={index} type={type} path={path} image={image} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuScreen;
