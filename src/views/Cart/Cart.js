import React, { useContext, useState } from "react";
import { ItemsContext } from "../../CartContext";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

import { collection, getDocs, orderBy, query, addDoc, where, Timestamp } from "firebase/firestore";
import { db } from "../../firebase";

const Cart = () => {
  const [cartItem, , clear, , removeItem] = useContext(ItemsContext);
  const [logged, setLogged] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [purchase, setPurchase] = useState(null);
  const [bought, setBought] = useState(false);

  const removeOnClick = (item) => {
    removeItem(item);
  };

  const removeAllOnClick = () => {
    clear();
  };

  const buyProducts = () => {
    setLogged(!logged);
  };

  const changeBought = () => {
    setBought(!bought);
  };

  const registerPurchase = async (e) => {
    e.preventDefault();
    cartItem.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    let date = new Date()
    const docRef = await addDoc(collection(db, 'users'), {
      buyer: {
        name: nameValue,
        phone: phoneValue,
        email: emailValue
      },
      items: { cartItem },
      date: Timestamp.fromDate(date),
      total: totalPrice
    });
    clear();
    const requestPurchaseId = async () => {
      const items = await getDocs(collection(db, "users"), where("date", "==", date));
      items.forEach((document) => {
        //console.log(document.id);
        setPurchase(document.id);
      });
    };
    requestPurchaseId();
    changeBought()
  };

  const onNameChange = (e) => {
    setNameValue(e.target.value)
  }

  const onPhoneChange = (e) => {
    setPhoneValue(e.target.value)
  }

  const onEmailChange = (e) => {
    setEmailValue(e.target.value)
  }


  let totalQtd = 0;
  let totalPrice = 0;

  cartItem.forEach((item) => {
    totalQtd += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  return cartItem.length === 0 ? (
    bought ? (
      <div>
        <h1>Order Status: Success</h1>
        <p>Your order id is: {purchase}</p>
        <button onClick={changeBought}>volver a comprar</button>
      </div>
    ) : (
      <div>
        <h1>Your cart is empty! </h1>
        <Link to={`/ItemList`}>Click here</Link>
        &nbsp;to buy something!
      </div>
    )
  ) : (
    <div className="col-md-8">
      {logged ? (
        <div>
          <h3>Please create an user to continue</h3>
          <form onSubmit={registerPurchase}>
            <label htmlFor="">Name:</label>
            <input type="text" value={nameValue} onChange={onNameChange} />
            <label htmlFor="">Phone:</label>
            <input type="phone" value={phoneValue} onChange={onPhoneChange} />
            <label htmlFor="">Email:</label>
            <input type="email" value={emailValue} onChange={onEmailChange} />
            <button type="submit">Send and Buy</button>
          </form>
        </div>
      ) : (
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
                  <td>
                    <button onClick={() => removeOnClick(item)}>X</button>{" "}
                    {item.title}{" "}
                  </td>
                  <td>{item.quantity}</td>
                  <td>$ {item.price.toFixed(2)}</td>
                  <td>$ {(item.price * item.quantity).toFixed(2)}</td>
                </tr>
              );
            })}
            <tr>
              <td>Total</td>
              <td>{totalQtd}</td>
              <td></td>
              <td colSpan="2">$ {totalPrice.toFixed(2)}</td>
            </tr>
            <tr>
              <td colSpan="2">
                <button onClick={() => removeAllOnClick()}>Clear Cart</button>
              </td>
              <td colSpan="2">
                <button onClick={() => buyProducts()}>Buy!</button>
              </td>
            </tr>
          </tbody>
        </Table>
      )
      }
    </div >
  );
};

export default Cart;
