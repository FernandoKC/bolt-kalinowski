import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Item from "../../components/item/item";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "../../firebase";

const Detail = ({ match }) => {
  let category = match.params.id;
  const [items, setItems] = useState([]);

  useEffect(() => {
    const requestData = async () => {
      const docs = [];

      const q = query(
        collection(db, "products"),
        where("category", "==", category),
        orderBy("id", "asc")
      );
      const items = await getDocs(q);
      items.forEach((document) => {
        docs.push({ ...document.data(), firestoreId: document.id });
      });
      setItems(docs);
    };
    requestData();
  }, [category]);

  return (
    <div className="CardContainer">
      {items.map((item) => {
        return item.stock >= 1 ? (
          <div className="itemDiv" key={item.id}>
            <Link to={`/detail/${item.id}`}>
              <Item data={item} />
            </Link>
          </div>
        ) : (
          console.log("No stock available for:", item.title)
        );
      })}
    </div>
  );
};

export default Detail;
