import React,{Component} from "react";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import ShoppingList from "./components/ShoppingList";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";

class App extends Component{
  render(){
    return (
      <Router basename="/">
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage}></Route>
            <Route path="/shoppinglist" component={ShoppingList}></Route>
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
