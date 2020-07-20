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
import { connect } from "react-redux";

const maptStateToProps = (state) => ({
  isSignedIn: state.user.isSignedIn,
  accessLevel: state.user.accessLevel,
  user: state.user.user,
});

const App = ({ isSignedIn, accessLevel }) => {
  return (
    <Router className="container-fluid">
      <div>
        <Switch>
          <Route exact path="/">
            <Navigation />
            <div className="container">
              <Controls />
              <ProductLists />
            </div>
          </Route>
          <Route path="/login" children={[<Navigation />, <Login />]} />
          <Route path="/register" children={[<Navigation />, <Register />]} />
          <Route path="/cart" children={[<Navigation />, <Cart />]} />
          <Route
            path="/admin"
            children={
              <Admin isSignedIn={isSignedIn} accessLevel={accessLevel} />
            }
          />
          <Route
            path="/productdetails/:id"
            children={[<Navigation />, <ProductDetails />]}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default connect(maptStateToProps)(App);
