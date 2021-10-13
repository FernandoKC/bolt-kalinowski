import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CartWidget from '../cartWidget/cartWidget'


const NavBar = (props) => {
    return ( 
      <div>
        <Navbar bg="dark" variant="dark" expand="xl" sticky="top">
        <Container fluid>
            <Navbar.Brand href="#home">Cookies Kali</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="/ItemList">All Items</Nav.Link>
                <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">men's clothing</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">jewelery</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">electronics</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <CartWidget/>
            </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    );
};
export default NavBar;