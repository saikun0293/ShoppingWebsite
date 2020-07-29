import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import ItemsList from "./ItemsList";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Jumbotron />
        <ItemsList />
      </React.Fragment>
    );
  }
}

export default HomePage;
