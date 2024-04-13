import React, { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";
import { Link } from "react-router-dom";

const ShoppingCartIcon = () => {
  const { cartItems } = useContext(ShoppingCartContext);

  return (
    <Link to="/shopping-cart" style={{ textDecoration: "none" }}>
      <div className="m-2">
        <img
          src="/images/shopping-cart.jpg"
          alt="Cart"
          style={{ width: "30px", height: "30px", borderRadius: "50%" }}
        />
        <span style={{ color: "red", textDecoration: "none" }}>{cartItems.length}</span>
      </div>
    </Link>
  );
};

export default ShoppingCartIcon;
