import React, { useState, useContext } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import ItemCount from "../../components/itemCount/itemCount";
import "./itemDetail.css";

import { ItemsContext } from "../../CartContext";

const Item = ({ data }) => {
  const [item] = useState(data);
  const [finish, setFinish] = useState(false);
  const [, , , addItem] = useContext(ItemsContext);

  const onAdd = (cantidad) => {
    let newItem = {
      id: item.id,
      title: item.title,
      quantity: cantidad,
      price: item.price,
      stock: parseInt(item.stock),
    };
    addItem(newItem);
    setFinish(!finish);
  };
  return (
    <Card key={data.id}>
      <div className="image-container">
        <Card.Img variant="top" src={data.image} />
      </div>
      <Card.Body>
        <Card.Title className="overflow-hidden"> {data.title}</Card.Title>
        <Card.Text style={{ maxHeight: "100px" }} className="overflow-auto">
          {data.description}
        </Card.Text>
        <Card.Subtitle>Price: $ {data.price}</Card.Subtitle>
        <Card.Subtitle>Stock: {data.stock}</Card.Subtitle>
      </Card.Body>
      {finish ? (
        <div className="itemCounter">
          <Link to={`/cart`}>
            <button>Go to Cart</button>
          </Link>
        </div>
      ) : (
        <ItemCount
          style={{ bottom: "0" }}
          item={item}
          onClick={(cant) => onAdd(cant)}
        />
      )}
    </Card>
  );
};

export default Item;
