import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

/* ---------------- HOME PAGE ---------------- */
function Home() {
  return (
    <div className="landing">
      <h1>Paradise Nursery 🌿</h1>
      <Link to="/plants">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */
function Navbar() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <nav style={{ padding: "10px", background: "#4CAF50" }}>
      <Link to="/" style={{ marginRight: "15px", color: "white" }}>
        Home
      </Link>

      <Link to="/plants" style={{ marginRight: "15px", color: "white" }}>
        Plants
      </Link>

      <Link to="/cart" style={{ color: "white" }}>
        Cart 🛒 ({totalQuantity})
      </Link>
    </nav>
  );
}

/* ---------------- APP ---------------- */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/plants"
          element={
            <>
              <Navbar />
              <ProductList />
            </>
          }
        />

        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <CartItem />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
