import React, { useContext } from "react";
import { ItemsContext } from "../../CartContext";
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table'

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
    cartItem.length === 0 ? (
      <div>
        <h1>Your cart is empty! </h1>
        <Link to={`/ItemList`}>
          Click here
        </Link>
        &nbsp;to buy something!
      </div>
    ) : (
      <div className="col-md-8">
        <Table striped bordered hover size="lg">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
              <th>Unt Price</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItem.map((item) => {
              return (
                <tr key={item.id.toString()}>
                  <td><button onClick={() => removeOnClick(item)}>X</button> {item.title} </td>
                  <td>{item.quantity}</td>
                  <td>$ {item.price}</td>
                  <td>$ {item.price * item.quantity}</td>
                </tr>
              );
            })}
            <tr>
              <td>Total</td>
              <td>{totalQtd}</td>
              <td></td>
              <td colSpan="2">$ {totalPrice}</td>
            </tr>
            <tr>
              <td colSpan="4"><button onClick={() => removeAllOnClick()}>Clear Cart</button></td>
            </tr>
          </tbody>
        </Table>
      </div >
    )
  );
};

export default Cart;