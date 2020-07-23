import React from "react";
import Login from "../components/Login/Login";
import Navigation from "../components/Navigation/Navigation";
import ProductLists from "../components/ProductLists/ProductLists";
import Controls from "./Controls";
import { Link } from "react-router-dom";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
const Admin = ({ isSignedIn, accessLevel }) => {
  let match = useRouteMatch();
  if (isSignedIn) {
    return accessLevel === "admin" ? (
      <div>
        <Navigation accessLevel={accessLevel} />
        <div className="container">
          <Switch>
            <Route exact path={match.path}>
              <h1 className="text-center mt-5">Welcome to Admin Panel</h1>
            </Route>
            <Route path={`${match.path}/products`}>
              <Controls accessLevel={accessLevel} />
              <ProductLists
                accessLevel={accessLevel}
                url="/admin/product/productdetails"
              />
            </Route>
            <Route path={`${match.path}/orders`}>
              <h1>Orders</h1>
            </Route>
            <Route path="/admin/product/productdetails/:productname">
              <ProductDetails accessLevel={accessLevel} />
            </Route>
          </Switch>
        </div>
      </div>
    ) : (
      <div className="mt-5">
        <h1 className="text-center">
          You don't have the privelege to access this page
        </h1>
        <Link to="/" className="text-center  d-block">
          Go to main page.
        </Link>
      </div>
    );
  } else {
    return <Login />;
  }
};

export default Admin;
