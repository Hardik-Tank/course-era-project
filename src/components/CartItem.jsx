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
    <div style={styles.page}>
      <h2 style={styles.heading}>🛒 Shopping Cart</h2>

      {items.length === 0 ? (
        <div style={styles.empty}>
          <h3>Your cart is empty</h3>
          
        </div>
      ) : (
        <div style={styles.layout}>
          {/* LEFT SIDE - CART ITEMS */}
          <div style={styles.itemsSection}>
            {items.map((item) => (
              <div key={item.id} style={styles.card}>
                <img
                  src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
                  alt={item.name}
                  style={styles.image}
                />

                <div style={styles.info}>
                  <h3 style={{ marginBottom: "8px" }}>{item.name}</h3>
                  <p style={styles.lightText}>
                    Unit Price: ${item.price}
                  </p>

                  <div style={styles.qtyRow}>
                    <button
                      style={styles.qtyBtn}
                      onClick={() =>
                        dispatch(decreaseQuantity(item.id))
                      }
                    >
                      −
                    </button>

                    <span style={styles.qtyValue}>
                      {item.quantity}
                    </span>

                    <button
                      style={styles.qtyBtn}
                      onClick={() =>
                        dispatch(increaseQuantity(item.id))
                      }
                    >
                      +
                    </button>
                  </div>

                  <p style={styles.totalText}>
                    Total: ${item.totalPrice}
                  </p>
                </div>

                <button
                  style={styles.deleteBtn}
                  onClick={() =>
                    dispatch(removeItem(item.id))
                  }
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - SUMMARY */}
          <div style={styles.summary}>
            <h3>Order Summary</h3>

            <div style={styles.summaryRow}>
              <span>Total Items:</span>
              <span>{items.length}</span>
            </div>

            <div style={styles.summaryRow}>
              <span>Total Amount:</span>
              <span style={{ fontWeight: "bold" }}>
                ${totalAmount}
              </span>
            </div>

            <button
              style={styles.checkoutBtn}
              onClick={() =>
                alert("Checkout Coming Soon 🚀")
              }
            >
              Proceed to Checkout
            </button>

            <Link to="/plants">
              <button style={styles.continueBtn}>
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  page: {
    maxWidth: "1200px",
    margin: "40px auto",
    padding: "20px",
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
  },
  empty: {
    textAlign: "center",
    padding: "50px",
    background: "#f8f8f8",
    borderRadius: "12px",
  },
  layout: {
    display: "flex",
    gap: "30px",
    alignItems: "flex-start",
  },
  itemsSection: {
    flex: 2,
  },
  card: {
    display: "flex",
    alignItems: "center",
    background: "white",
    padding: "20px",
    borderRadius: "14px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    marginBottom: "20px",
  },
  image: {
    width: "110px",
    height: "110px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  info: {
    flex: 1,
    marginLeft: "20px",
  },
  lightText: {
    color: "#777",
    marginBottom: "10px",
  },
  qtyRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "10px",
  },
  qtyBtn: {
    background: "#4CAF50",
    color: "white",
    border: "none",
    padding: "6px 14px",
    borderRadius: "6px",
    fontSize: "18px",
    cursor: "pointer",
  },
  qtyValue: {
    margin: "0 15px",
    fontWeight: "bold",
  },
  totalText: {
    fontWeight: "bold",
  },
  deleteBtn: {
    background: "transparent",
    color: "red",
    border: "1px solid red",
    padding: "8px 14px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  summary: {
    flex: 1,
    background: "white",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    position: "sticky",
    top: "20px",
  },
  summaryRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "15px",
  },
  checkoutBtn: {
    width: "100%",
    padding: "12px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    marginBottom: "10px",
    cursor: "pointer",
    fontSize: "16px",
  },
  continueBtn: {
    width: "100%",
    padding: "12px",
    background: "#333",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  primaryBtn: {
    padding: "10px 20px",
    background: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default CartItem;
