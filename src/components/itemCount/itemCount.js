import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemCount = ({ item, onClick }) => {
  const [count, setCount] = React.useState(item.initial);

  const handleIncrement = () => {
    if (count < item.stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > item.initial) {
      setCount(count - 1);
    }
  };

  return (
    <div className="itemCounter">
      <Row>
        <Col className="justify-content-center d-flex">
          <h1>{count}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="justify-content-center d-flex">
          <Button variant="outline-secondary" onClick={handleDecrement}>
            -
          </Button>
          <Button variant="outline-secondary" onClick={() => onClick(count)}>
            Add To Cart
          </Button>
          <Button variant="outline-secondary" onClick={handleIncrement}>
            +
          </Button>
        </Col>
      </Row>
      <br />
    </div>
  );
};

export default ItemCount;
