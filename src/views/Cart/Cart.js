import React, { useContext } from "react";
import Item from "../../components/item/item";
import { ItemsContext } from "../../CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItem, , clear, , removeItem] = useContext(ItemsContext);

  const removeOnClick = (item) => {
    removeItem(item);
  };

  const removeAllOnClick = () => {
    clear();
  };
  let totalQtd = 0
  let totalPrice = 0
  cartItem.forEach(item => {
    totalQtd+=item.quantity
    totalPrice+=item.price * item.quantity
    
  });

  return (
    <div className="CardContainer">
      {cartItem.map((item) => {
        return (
          <div key={item.id.toString()}>
            <div className="itemDiv">
              <Link to={`/detail/${item.id}`}>
                <Item data={item} />
              </Link>
            </div>
            <button onClick={() => removeOnClick(item)}>Remove Item</button>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;