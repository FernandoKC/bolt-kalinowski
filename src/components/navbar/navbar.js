import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from '../cartWidget/cartWidget'
import CategoryList from '../categoryList/categoryList'


const NavBar = (props) => {
    return ( 
      <div>
        <Navbar bg="dark" variant="dark" expand="xl" sticky="top">
        <Container fluid>
            <Navbar.Brand href="/">Kali Store</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/ItemList">All Items</Nav.Link>
                <CategoryList/>
              </Nav>
            <CartWidget/>
            </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    );
};
export default NavBar;