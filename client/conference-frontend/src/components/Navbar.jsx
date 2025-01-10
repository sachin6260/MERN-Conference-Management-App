import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navItem}>
        <Link to="/" style={styles.link}>Home</Link>
      </div>
      <div style={styles.navItem}>
        <Link to="/admin" style={styles.link}>Admin Dashboard</Link>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px 20px",
    backgroundColor: "#333",
  },
  navItem: {
    margin: "0 10px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  }
};

export default Navbar;
