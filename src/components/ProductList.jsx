import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { Link } from "react-router-dom";

const plants = [
  { id: 1, name: "Aloe Vera", price: 10, category: "Succulents" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 20, category: "Flowering" },
  { id: 4, name: "Cactus", price: 12, category: "Succulents" },
  { id: 5, name: "ZZ Plant", price: 18, category: "Indoor" },
  { id: 6, name: "Orchid", price: 25, category: "Flowering" },
  { id: 7, name: "Jade Plant", price: 14, category: "Succulents" },
  { id: 8, name: "Monstera", price: 22, category: "Indoor" },
  { id: 9, name: "Rose Plant", price: 16, category: "Flowering" },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.totalQuantity);
  const [addedItems, setAddedItems] = useState([]);

  const handleAdd = (plant) => {
    dispatch(addToCart(plant));
    setAddedItems([...addedItems, plant.id]);
  };

  const categories = ["Succulents", "Indoor", "Flowering"];

  return (
    <div>
      {/* Navbar */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/plants">Plants</Link> |{" "}
        <Link to="/cart">Cart 🛒 ({cartCount})</Link>
      </nav>

      <h2>Our Plants</h2>

      {categories.map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          {plants
            .filter((plant) => plant.category === category)
            .map((plant) => (
              <div key={plant.id}>
                <h4>{plant.name}</h4>
                <p>Price: ${plant.price}</p>
                <button
                  onClick={() => handleAdd(plant)}
                  disabled={addedItems.includes(plant.id)}
                >
                  {addedItems.includes(plant.id)
                    ? "Added"
                    : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductList;
