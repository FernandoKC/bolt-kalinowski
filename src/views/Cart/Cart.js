import React, { useContext, useState } from "react";
import { ItemsContext } from "../../CartContext";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import {
  collection,
  getDocs,
  setDoc,
  addDoc,
  doc,
  where,
  Timestamp,
  query,
} from "firebase/firestore";
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
    if (nameValue !== "" && phoneValue !== "" && emailValue !== "") {
      let date = new Date();
      await addDoc(collection(db, "users"), {
        buyer: {
          name: nameValue,
          phone: phoneValue,
          email: emailValue,
        },
        items: cartItem,
        date: Timestamp.fromDate(date),
        total: totalPrice,
      });
      clear();
      const requestPurchaseId = async () => {
        const q = query(collection(db, "users"), where("date", "==", date));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((document) => {
          // document.data() is never undefined for query document snapshots
          document.data().items.forEach((item) => {
            const updateStock = async () => {
              const productStock = doc(db, "products", item.firestoreId);
              setDoc(
                productStock,
                {
                  stock: item.stock - item.quantity,
                },
                { merge: true }
              );
            };
            updateStock();
          });
          setPurchase(document.id);
        });
      };
      requestPurchaseId();
      changeBought();
    }
  };

  const onNameChange = (e) => {
    setNameValue(e.target.value);
  };

  const onPhoneChange = (e) => {
    setPhoneValue(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmailValue(e.target.value);
  };

  let totalQtd = 0;
  let totalPrice = 0;

  cartItem.forEach((item) => {
    totalQtd += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  return cartItem.length === 0 ? (
    bought ? (
      <div className="col-md-12 justify-content-center d-flex" style={{ marginTop: "40px" }}>
        <Alert variant="success" className="col-md-6">
          <Alert.Heading>Order Status: Success!</Alert.Heading>
          <p>
            Your order ID is: {purchase}
          </p>
          <hr />
          <div >
            <Link to={`/ItemList`}>
              <Button variant="outline-success" onClick={changeBought}>
                Go back to store
              </Button>
            </Link>
          </div>
        </Alert>
      </div >
    ) : (
      <div className="col-md-12 justify-content-center d-flex">
        <div className="col-md-4">
          <br />
          <Alert variant="info">
            <Alert.Heading>Your cart is empty!</Alert.Heading>
            <p>
              Please, use the button below to access our list of products and
              select another product.
            </p>
            <hr />
            <div className="mb-0">
              <Link to={`/ItemList`}>
                <Button variant="outline-info">Click here</Button>
              </Link>
              &nbsp;to see more products!
            </div>
          </Alert>
        </div>
      </div>
    )
  ) : (
    <div className="col-md-12 justify-content-center d-flex">
      {logged ? (
        <div className="col-md-4">
          <h3>Please create an user to continue</h3>
          <Form onSubmit={registerPurchase}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="">Name</Form.Label>
              <Form.Control
                type="name"
                value={nameValue}
                onChange={onNameChange}
              />
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                value={phoneValue}
                onChange={onPhoneChange}
              />
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={emailValue}
                onChange={onEmailChange}
              />
            </Form.Group>
            <Button type="submit">Send and Buy</Button>
          </Form>
        </div>
      ) : (
        <div className="col-md-8" style={{ marginTop: "40px" }}>
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
                      <Button variant="outline-danger" onClick={() => removeOnClick(item)}>X</Button>{" "}
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
                  <Button variant="danger" onClick={() => removeAllOnClick()}>Clear Cart</Button>
                </td>
                <td colSpan="2" >
                  <div className="d-flex justify-content-center">
                    <Button variant="success" onClick={() => buyProducts()}>Buy!</Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default Cart;
