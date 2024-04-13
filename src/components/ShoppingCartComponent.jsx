import React from "react";
import { useShoppingCart } from "./ShoppingCartContext";
import { Link } from "react-router-dom";

const ShoppingCartComponent = () => {
  const { cartItems, removeFromCart, totalPrice } = useShoppingCart();
  const handleRemoveItemClick = (itemId) => {
    removeFromCart(itemId);
  };
  return (
    <div className="p-5">
      {cartItems.map((item) => (
        <div key={item.id} className="d-flex row mb-2">
          <div className="col">
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "50px", height: "50px", marginRight: "10px" }}
            />
            {item.name}
          </div>
          <div className="col">Quantity: {item.quantity}</div>
          <div className="col">
            <button className="btn btn-danger" onClick={() => handleRemoveItemClick(item.id)}>
              Remove
            </button>
          </div>
          <div className="col">${item.price * item.quantity}</div>
        </div>
      ))}
      <br />
      <div>Total Price: ${totalPrice}</div>
      <br />
      <Link to="/checkout">
        <button className="btn btn-primary">Check out</button>
      </Link>
    </div>
  );
};

export default ShoppingCartComponent;
