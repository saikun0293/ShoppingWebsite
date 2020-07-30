import React, { Component } from "react";
import Axios from "axios";
import "../styles/ShoppingList.css";

let apiKey = "8768bbc746d64e96b651cf4162eedb15";

const api = Axios.create({
  baseURL: "https://crudcrud.com/api/" + apiKey + "/selectedItems",
});

class ShoppingList extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    api.get("/").then((res) => {
      let items = res.data;
      this.setState({ items });
    });
  }

  handleDelete = (d) => {
    api.delete("/" + d._id).then(function (res) {
      console.log(res);
    });

    const items = this.state.items;
    const index = items.indexOf(d);
    items.splice(index, 1);
    this.setState({ items });
  };

  handleIncrement = (d) => {
    d.data.quantity++;
    const items = this.state.items;
    const index = items.indexOf(d);
    items[index] = { ...d };
    this.setState({ items });
  };

  handleDecrement = (d) => {
    if (d.data.quantity > 1) {
      d.data.quantity--;
    }
    const items = this.state.items;
    const index = items.indexOf(d);
    items[index] = { ...d };
    this.setState({ items });
  };

  purchased() {
    if (this.state.items.length !== 0) {
      window.alert("Products purchased successfully!");
    } else {
      window.alert("No products to purchase!");
    }
  }

  render() {
    return (
      <div className="list-container">
        <div className="list-title">Your Shopping List</div>
        <ul className="shoppingListTable">
          {this.state.items.map((d) => {
            let item = d.data;
            return (
              <div key={d._id} className="row">
                <div className="item col-md-11">
                  <li>{item.productDisplayName}</li>
                  <span>
                    <i
                      className="fas fa-minus-circle"
                      onClick={() => this.handleDelete(d)}
                    ></i>
                  </span>
                </div>
                <div className="quantity col-md-1">
                  <span className="badge badge-info ">{item.quantity}</span>
                  <div className="arrows">
                    <span>
                      <i
                        className="fas fa-angle-up"
                        onClick={() => this.handleIncrement(d)}
                      ></i>
                    </span>
                    <span>
                      <i
                        className="fas fa-angle-down"
                        onClick={() => this.handleDecrement(d)}
                      ></i>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="purchase-btn">
            <button
              type="submit"
              className="btn btn-outline-dark"
              onClick={() => this.purchased()}
            >
              Purchase Now
            </button>
          </div>
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
