import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../redux/CartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();
  const { items, totalAmount } = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Shopping Cart</h2>

      {items.length === 0 && <p>Your cart is empty.</p>}

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          {/* Thumbnail */}
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
            alt={item.name}
            width="100"
          />

          {/* Name & Price */}
          <h3>{item.name}</h3>
          <p>Unit Price: ${item.price}</p>

          {/* Quantity Controls */}
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>
            -
          </button>

          <span style={{ margin: "0 10px" }}>
            Quantity: {item.quantity}
          </span>

          <button onClick={() => dispatch(increaseQuantity(item.id))}>
            +
          </button>

          {/* Total for this item */}
          <p>Total: ${item.totalPrice}</p>

          {/* Delete Button */}
          <button
            onClick={() => dispatch(removeItem(item.id))}
            style={{ backgroundColor: "red", color: "white" }}
          >
            Delete
          </button>
        </div>
      ))}

      {/* TOTAL CART AMOUNT */}
      <h3>Total Cart Amount: ${totalAmount}</h3>

      {/* Checkout Button */}
      <button
        onClick={() => alert("Checkout Coming Soon!")}
        style={{ marginRight: "10px" }}
      >
        Checkout
      </button>

      {/* Continue Shopping */}
      <Link to="/plants">
        <button>Continue Shopping</button>
      </Link>
    </div>
  );
}

export default CartItem;
