import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="logo">Vitizon</div>
        <div>
          <Link to="/">
            <span className="link">
              <i className="fas fa-home"></i>
            </span>
          </Link>
          <Link to="/shoppinglist">
            <span className="link">
              <i className="fas fa-shopping-cart"></i>
            </span>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
