import React from "react";
import Navigation from "../components/Navigation/Navigation";
import ProductLists from "../components/ProductLists/ProductLists";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Cart from "../components/Cart/Cart";
import Controls from "./Controls";
import Admin from "./Admin";
import ProductDetails from "../components/ProductDetails/ProductDetails";

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
          <Route path="/login" children={<Login />} />
          <Route path="/register" children={<Register />} />
          <Route path="/cart" children={<Cart />} />
          <Route path="/admin" children={<Admin />} />
          <Route path="/productdetails/:id" children={<ProductDetails />} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
