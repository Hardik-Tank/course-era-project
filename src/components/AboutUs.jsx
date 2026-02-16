import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h1 style={styles.title}>🌿 About Paradise Nursery</h1>

        <p style={styles.text}>
          Paradise Nursery is your one-stop destination for beautiful,
          fresh, and healthy houseplants. We carefully curate a wide
          variety of indoor plants categorized for your convenience.
        </p>

        <p style={styles.text}>
          Our mission is simple — to make homes greener, healthier,
          and happier. Whether you are a beginner or a plant lover,
          we have something special for you.
        </p>

        <div style={styles.buttonContainer}>
          <Link to="/plants">
            <button style={styles.primaryBtn}>
              Explore Our Plants 🌱
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #d4fc79, #96e6a1)",
    padding: "20px",
  },
  card: {
    background: "white",
    padding: "40px",
    borderRadius: "16px",
    maxWidth: "700px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
  },
  title: {
    marginBottom: "20px",
    fontSize: "32px",
  },
  text: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "15px",
    color: "#555",
  },
  buttonContainer: {
    marginTop: "25px",
  },
  primaryBtn: {
    padding: "12px 25px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default AboutUs;
