import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const items = useSelector((state) => state.cart.items);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {items.map((item, index) => (
        <div key={index}>
          {item.name} - ${item.price}
        </div>
      ))}
    </div>
  );
}

export default Cart;
