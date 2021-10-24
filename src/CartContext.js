import React, { useState, createContext } from "react";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const clear = () => {
    setCartItem([]);
  };

  const addItem = (item) => {
    if (!isInCart(item.id)) {
      setCartItem([...cartItem, item]);
    } else {
      alert("item already exists");
      console.log(cartItem);
    }
  };

  const removeItem = (item) => {
    if (isInCart(item.id)) {
      setCartItem([]);
    } else {
      console.log(cartItem);
      alert("item does not exists");
    }
  };

  const isInCart = (id) => {
    let filteredItems = cartItem.find((item) => {
      return item.id === id;
    });
    return filteredItems;
  };

  return (
    <ItemsContext.Provider
      value={[cartItem, setCartItem, clear, addItem, removeItem]}
    >
      {children}
    </ItemsContext.Provider>
  );
};
