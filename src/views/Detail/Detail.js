import axios from "axios";
import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/itemDetail/itemDetail";

const Detail = ({ match }) => {
  let itemID = match.params.id;
  const [item, setItem] = useState({});
  const min = 1;
  const max = 10;

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${itemID}`).then((res) =>
      setItem(res.data)
    );
  }, [itemID]);

  const rand = min + Math.random() * (max - min);
  item["initial"] = 1;
  item["stock"] = rand.toFixed();

  return (
    <div className="CardContainer d-flex justify-content-center col-md-auto">
      <div className="itemDiv" key={item.id}>
        <ItemDetail data={item} />
      </div>
    </div>
  );
};

export default Detail;
