import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MenuHeader.css";

const MenuHeader = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="menuHeader">
      <div className="menuHeader__links">
        <Link
          to="#"
          className={`${index === 0 && "menuHeader__link--active"}`}
          onClick={() => setIndex(0)}
        >
          All Products
        </Link>
        <Link
          to="#"
          className={`${index === 1 && "menuHeader__link--active"}`}
          onClick={() => setIndex(1)}
        >
          Featured
        </Link>
        <Link
          to="/menu/previous-orders"
          className={`${index === 3 && "menuHeader__link--active"}`}
          onClick={() => setIndex(3)}
        >
          Previous Orders
        </Link>
        <Link
          to="/menu/favourite"
          className={`${index === 4 && "menuHeader__link--active"}`}
          onClick={() => setIndex(4)}
        >
          Favourite Product
        </Link>
      </div>
    </div>
  );
};

export default MenuHeader;
