import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setClass] = useState(false)

  function handleAddToCart(e) {
    setClass((inCart) => !inCart)
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove" : "add"} onClick={handleAddToCart}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
