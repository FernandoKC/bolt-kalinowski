import React from "react";

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
      <h1>{count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={() => onClick(count)}>Add To Cart</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default ItemCount;
