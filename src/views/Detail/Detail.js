import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/itemDetail/itemDetail";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase";

const Detail = ({ match }) => {
  let itemID = parseInt(match.params.id);
  const [item, setItem] = useState({});

  useEffect(() => {
    const requestData = async () => {
      const docs = [];
      const q = query(collection(db, "products"), where("id", "==", itemID));
      const items = await getDocs(q);
      items.forEach((document) => {
        docs.push({ ...document.data(), initial: 1, firestoreId: document.id });
      });
      setItem(docs[0]);
    };
    requestData();
  }, [itemID]);

  return (
    <div className="CardContainer d-flex justify-content-center col-md-auto">
      <div className="itemDiv" key={item.id}>
        <ItemDetail data={item} />
      </div>
    </div>
  );
};

export default Detail;
