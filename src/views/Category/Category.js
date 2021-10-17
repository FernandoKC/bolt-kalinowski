import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "../../components/item/item";

const Detail = ({ match }) => {
  let category = match.params.id;
  const [items, setItems] = useState([]);
  const min = 1;
  const max = 10;

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/category/${category}`).then(
      (res) => setItems(res.data)
    );
  }, [category]);

  return (
    <div className="CardContainer">
      {items.map((item) => {
        const rand = min + Math.random() * (max - min);
        item["stock"] = rand;
        item["initial"] = 1;
        return (
          <div className="itemDiv" key={item.id.toString()}>
            <Link to={`/detail/${item.id}`}>
              <Item data={item} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Detail;
