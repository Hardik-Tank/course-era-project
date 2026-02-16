import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useSelector } from "react-redux";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

/* ---------------- HOME PAGE ---------------- */
function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>🌿 Paradise Nursery</h1>
        <p>
          Discover beautiful indoor plants that bring life and freshness to
          your home.
        </p>
        <Link to="/plants">
          <button className="primary-btn">Explore Plants</button>
        </Link>
      </div>
    </div>
  );
}

/* ---------------- NAVBAR ---------------- */
function Navbar() {
  const items = useSelector((state) => state.cart.items);

  // ✅ Calculate total quantity dynamically
  const totalQuantity = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="logo">🌿 Paradise</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart" className="cart-link">
          🛒 Cart
          <span className="cart-badge">{totalQuantity}</span>
        </Link>
      </div>
    </nav>
  );
}

/* ---------------- APP ---------------- */
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </Router>
  );
}

export default App;
