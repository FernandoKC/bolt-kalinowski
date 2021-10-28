import React, { useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/container";
import CartWidget from "../cartWidget/cartWidget";
import CategoryList from "../categoryList/categoryList";
import { ItemsContext } from "../../CartContext";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  const [cartItem, , , , ] = useContext(ItemsContext);
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="xl" sticky="top">
        <Container fluid>
              <Link to={`/`} className="navbar-brand" tabindex="0">
                Kali Store
              </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="me-auto navbar-nav">
              <Link to={`/ItemList`} role="button" className="nav-link" tabindex="0">
                All Items
              </Link>
              <CategoryList />

              {cartItem.length === 0 ? (
                console.log("a")
              ) : (
                <>
                  <CartWidget />
                  <Navbar.Brand>{cartItem.length} item(s)</Navbar.Brand>
                </>
              )}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavBar;
