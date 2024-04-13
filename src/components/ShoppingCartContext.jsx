import React, { createContext, useState, useContext, useEffect } from "react";
import { getProduct } from "../services/admin/ProductService";

const ShoppingCartContext = createContext();

export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};

const ShoppingCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    updateTotalPrice();
  }, [cartItems]);

  const addToCart = async (id) => {
    const product = await getProduct(id);
    if (!product) return;

    const existingItem = cartItems.find((item) => item.id === id);
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateTotalPrice = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const contextValue = {
    cartItems,
    totalPrice,
    addToCart,
    removeFromCart,
  };

  return (
    <ShoppingCartContext.Provider value={contextValue}>{children}</ShoppingCartContext.Provider>
  );
};

export { ShoppingCartProvider, ShoppingCartContext };
