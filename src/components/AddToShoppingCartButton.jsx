import React, { useContext } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";

const AddToShoppingCartButton = ({ itemId }) => {
  const { addToCart } = useContext(ShoppingCartContext);

  const handleClick = () => {
    addToCart(itemId);
  };

  return (
    <button className="btn btn-outline-primary mb-2" onClick={handleClick}>
      Add to Cart
    </button>
  );
};

export default AddToShoppingCartButton;
