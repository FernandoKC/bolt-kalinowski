import React from "react";
import Card from "react-bootstrap/Card";
import "./item.css";

const Item = ({ data }) => {
  return (
    <Card key={data.id}>
      <div className="image-container">
        <Card.Img variant="top" src={data.image} />
      </div>
      <Card.Body>
        <Card.Title className="overflow-hidden"> {data.title}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default Item;
