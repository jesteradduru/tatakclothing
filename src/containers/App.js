import React from "react";
import Navigation from "../components/Navigation/Navigation";
import ProductLists from "../components/ProductLists/ProductLists";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Cart from "../components/Cart/Cart";
import Controls from "./Controls";

const App = () => {
  return (
    <Router className="container-fluid">
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <div className="container">
              <Controls />
              <ProductLists />
            </div>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
