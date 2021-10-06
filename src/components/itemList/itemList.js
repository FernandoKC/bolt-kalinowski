import React, { useState, useEffect } from "react";
import Item from "../item/item";
import './itemList.css'

const ItemList = () => {
  const [items, setItems] = useState([]);
  const min = 1;
  const max = 10;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="CardContainer">
      {items.map((item) => {
        const rand = min + Math.random() * (max - min);
        item["stock"] = rand;
        item["initial"] = 1;
        return (
          <div className="itemDiv" key={item.id.toString()}>
            <Item data={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
