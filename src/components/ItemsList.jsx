import React, { Component } from "react";
import data from "../itemsList.json";
import Axios from "axios";

const api = Axios.create({
  baseURL:
    "https://crudcrud.com/Dashboard/2982f1a0023140af943bf92217409658/selectedItems",
});

class ItemsList extends Component {
  cardsStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };

  handlePostRequest = (data, event) => {
    console.log(event);
    data.quantity = 1;
    api.get("/").then(function (res) {
      const items = res.data;
      if (
        !items.some(
          (item) => item.data.productDisplayName === data.productDisplayName
        )
      ) {
        api
          .post("/", { data })
          .then(function (res) {
            console.log("Posted Successfully!");
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        window.alert("Product already added to the list");
      }
    });
  };

  render() {
    return (
      <div className="container" style={this.cardsStyle}>
        {data.itemDetails.map((d, index) => (
          <div key={index} className="card col-md-4 col-sm-6">
            <img className="card-img-top" src={d.link} alt="shop-item" />
            <div className="card-body">
              <h5 className="card-title">{d.productDisplayName}</h5>
              <p className="card-text">
                {d.usage +
                  " " +
                  d.subCategory +
                  " " +
                  d.articleType +
                  " for the " +
                  d.season +
                  " season"}
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span className="property">Colour : </span>
                <span className="value">{d.baseColour}</span>
              </li>
              <li className="list-group-item">
                <span className="property">Gender : </span>
                <span className="value">{d.gender}</span>
              </li>
              <li className="list-group-item">
                <span className="property">Category : </span>
                <span className="value">{d.masterCategory}</span>
              </li>
            </ul>
            <div className="card-body">
              <button
                className="btn btn-dark"
                onClick={(e) => this.handlePostRequest(d, e)}
              >
                <i className="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
        ))}
        ;
      </div>
    );
  }
}

export default ItemsList;
