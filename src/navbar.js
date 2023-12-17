import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div>
      <nav className="nav">
        <h3 className="heading">Shopping Cart</h3>
        <div className="container">
          <button className="link">
            <NavLink className="click" to="/">Home</NavLink>
          </button>
          <button className="link">
            <NavLink className="click" to="/Cart">Cart</NavLink>
          </button>
          <button className="link">
            <NavLink className="click" to="/AddItem">Add Item</NavLink>
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
