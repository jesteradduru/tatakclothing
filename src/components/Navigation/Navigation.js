import React from "react";
import { Navbar, Nav, NavItem, Button } from "reactstrap";
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link, useRouteMatch } from "react-router-dom";

const Navigation = ({ accessLevel }) => {
  let match = useRouteMatch();
  if (accessLevel !== "admin") {
    return (
      <Navbar color="light" light expand="md">
        <div className="container">
          <Link to="/" className="navbar-brand pointer">
            <span className="logo">tatak</span>
          </Link>
          <Nav className="ml-auto">
            <NavItem>
              <Link to="/notifications" className="nav-link">
                Notifications
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/cart" className="nav-link">
                <FontAwesomeIcon icon={faShoppingCart} color="#777" />
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/login">
                <Button color="primary">Login</Button>
              </Link>
              <Link to="/register">
                <Button className="ml-2" color="warning">
                  Register
                </Button>
              </Link>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    );
  } else {
    return (
      <Navbar color="light" light expand="md">
        <div className="container">
          <Link to={`${match.url}`} className="navbar-brand pointer">
            <span className="logo">tatak</span>
          </Link>
          <Nav className="ml-auto">
            <NavItem>
              <Link to={`${match.url}/products`} className="nav-link">
                Products
              </Link>
            </NavItem>
            <NavItem>
              <Link to={`${match.url}/orders`} className="nav-link">
                Orders
              </Link>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    );
  }
};

export default Navigation;
