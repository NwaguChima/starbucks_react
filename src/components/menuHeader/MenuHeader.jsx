import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MenuHeader.css";

const MenuHeader = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="menuHeader">
      <div className="menuHeader__links">
        <Link
          to="/menu/allproducts"
          className={`${index === 0 && "menuHeader__link--active"}`}
          onClick={() => setIndex(0)}
        >
          All Products
        </Link>
        <Link
          to="/menu/featured"
          className={`${index === 1 && "menuHeader__link--active"}`}
          onClick={() => setIndex(1)}
        >
          Featured
        </Link>
        <Link to="/menu/previous-orders">Previous Orders</Link>
        <Link to="/menu/favourite">Favourite Product</Link>
      </div>
    </div>
  );
};

export default MenuHeader;
