import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={{ span: 6, offset: 3 }}>
          <h1>Bolt Store</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col className="justify-content-center" md={{ span: 6 }}>
          <p>Bolt Store is a e-commerce simulation that was created to learn React JS.</p>
          In order to see all items that the e-commerce can offer&nbsp;
          <Link to={`/ItemList`}>Click here</Link>
          &nbsp;to check it!
          <p>Or you can check our categories:</p>
          <ListGroup variant="flush">
            <ListGroup.Item><Link to={`/category/electronics`}>Electronics</Link></ListGroup.Item>
            <ListGroup.Item><Link to={`/category/jewelry`}>Jewelry</Link></ListGroup.Item>
            <ListGroup.Item><Link to={`/category/men's%20clothing`}>Men's Clothing</Link></ListGroup.Item>
            <ListGroup.Item><Link to={`/category/women's%20clothing`}>Women's Clothing</Link></ListGroup.Item>
          </ListGroup>
          <p>Once you add an product to your cart the Cart Icon will pop up and you can access it from there</p>
          <p>Thank you! And good shopping!</p>
        </Col>
      </Row>

    </Container>
  );
};

export default Home;
