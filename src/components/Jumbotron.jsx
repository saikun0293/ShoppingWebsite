import React, { Component } from "react";
import "../styles/Jumbotron.css";

class Jumbotron extends Component {
  state = {};
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1>Vitizon Season Sale</h1>
          <p>
            The most awaited season sale where you get products with discount
            upto 50%
          </p>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
