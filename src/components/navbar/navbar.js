import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/container";
import Nav from "react-bootstrap/Nav";
import CartWidget from "../cartWidget/cartWidget";
import CategoryList from "../categoryList/categoryList";
import { ItemsContext } from "../../CartContext";

const NavBar = (props) => {
  const [cartItem, , clear, , removeItem] = useContext(ItemsContext);
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="xl" sticky="top">
        <Container fluid>
          <Navbar.Brand href="/">Kali Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/ItemList">All Items </Nav.Link>
              <CategoryList />
            
            {cartItem.length === 0 ? (
              console.log("a")
            ) : (
              <>
                <CartWidget />
                <Navbar.Brand>{cartItem.length} item(s)</Navbar.Brand>
              </>
            )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
