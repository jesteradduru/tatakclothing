import React from "react";
import { Card, CardBody, CardImg, Button } from "reactstrap";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CartItem = ({ name, color, size, price, quantity }) => {
  return (
    <Card className="shadow-sm mb-4">
      <CardBody>
        <div className="row">
          <div className="col-md-3">
            <CardImg width="100%" src="https://robohash.org/123" />
          </div>
          <div className="col-md-9 my-auto">
            <h4 className="font-weight-bold text-primary">{name}</h4>
            <p className="lead">
              Color: {color}, Size: {size}
            </p>
            <div className="d-flex align-items-center">
              <span className="lead mr-3">Quantity:</span>
              <Button size="sm" color="danger">
                -
              </Button>
              <span className="mx-2">{quantity}</span>
              <Button size="sm" color="danger">
                +
              </Button>
            </div>
            <Button color="danger" className="ml-auto d-block mt-5">
              Remove <FontAwesomeIcon icon={faCartArrowDown}></FontAwesomeIcon>
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default CartItem;
