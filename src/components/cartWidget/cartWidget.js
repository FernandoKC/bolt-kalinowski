import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CartWidget = () => {
  return (
    <>
      <Form className="d-flex">
        <Link to={`/cart`}>
          <Button variant="dark">
            <FaShoppingCart />
          </Button>
        </Link>
      </Form>
    </>
  );
};

export default CartWidget;
