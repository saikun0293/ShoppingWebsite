import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteItem, incQuantity, decQuantity, deleteAll } from "../redux";
import "../styles/ShoppingList.css";

class ShoppingList extends Component {
  purchased = () => {
    if (this.props.items.length !== 0) {
      window.alert("Products purchased successfully!");
      this.props.deleteAll();
    } else {
      window.alert("No products to purchase!");
    }
  };

  render() {
    // console.log(this.props.items);
    return (
      <div className="list-container">
        <div className="list-title">Your Shopping List</div>
        <ul className="shoppingListTable">
          {this.props.items.map((d) => {
            let item = d;
            console.log(item);
            return (
              <div key={d.id} className="row">
                <div className="item col-md-11">
                  <li>{item.productDisplayName}</li>
                  <span>
                    <i
                      className="fas fa-minus-circle"
                      onClick={() => this.props.deleteItem(d)}
                    ></i>
                  </span>
                </div>
                <div className="quantity col-md-1">
                  <span className="badge badge-info ">{item.quantity}</span>
                  <div className="arrows">
                    <span>
                      <i
                        className="fas fa-angle-up"
                        onClick={() => this.props.incQuantity(d)}
                      ></i>
                    </span>
                    <span>
                      <i
                        className="fas fa-angle-down"
                        onClick={() =>
                          d.quantity > 1 ? this.props.decQuantity(d) : null
                        }
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

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (i) => dispatch(deleteItem(i)),
    incQuantity: (i) => dispatch(incQuantity(i)),
    decQuantity: (i) => dispatch(decQuantity(i)),
    deleteAll: () => dispatch(deleteAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);
