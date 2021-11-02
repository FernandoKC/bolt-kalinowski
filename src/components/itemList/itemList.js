import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "../item/item";
import "./itemList.css";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../firebase";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const min = 1;
  const max = 10;

  useEffect(() => {
    const requestData = async () => {
      const docs = [];
      const q = query(collection(db, "products"), orderBy("id", "asc"));
      const items = await getDocs(q);
      items.forEach((document) => {
        docs.push({ ...document.data() });
      });
      setItems(docs);
    };
    requestData();
  }, []);

  return (
    <div className="CardContainer">
      {items.map((item) => {
        const rand = min + Math.random() * (max - min);
        item["stock"] = rand;
        item["initial"] = 1;
        return (
          <div className="itemDiv" key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <Item data={item} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
