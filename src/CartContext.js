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
    }
  };

  const removeItem = (itemid) => {
    if (isInCart(itemid.id)) {
      setCartItem(cartItem.filter((item) => item.id !== itemid.id));
    } else {
      alert("item does not exists");
    }
  };

  const isInCart = (id) => {
    return !!cartItem.find((item) => item.id === id);
  };

  return (
    <ItemsContext.Provider
      value={[cartItem, setCartItem, clear, addItem, removeItem]}
    >
      {children}
    </ItemsContext.Provider>
  );
};
