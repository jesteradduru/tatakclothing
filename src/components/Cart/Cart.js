import React from "react";
import CartItem from "../CartItem/CartItem";
import ScrollBox from "../ScrollBox/ScrollBox";
import { Button } from "reactstrap";
class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: [
        {
          name: "GGHL",
          color: "white",
          size: "L",
          price: "280",
          quantity: 1,
        },
        {
          name: "PLO",
          color: "white",
          size: "XS",
          price: "280",
          quantity: 1,
        },
      ],
    };
  }
  render() {
    const cartItems = this.state.cartItems.map((item) => {
      return (
        <CartItem
          name={item.name}
          color={item.color}
          size={item.size}
          price={item.price}
          quantity={item.quantity}
        />
      );
    });
    return (
      <div className="container mt-5">
        <div className="d-flex justify-content-between mt-5  mt-3 mb-5">
          <h3>My Cart</h3>
          <Button color="success" size="md">
            Proceed to Checkout
          </Button>
        </div>
        <ScrollBox viewHeight="80vh" scrollDirection="vertical">
          {cartItems}
        </ScrollBox>
      </div>
    );
  }
}

export default Cart;
