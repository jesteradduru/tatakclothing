import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Product = ({ imgSource, name, price, description }) => {
  return (
    <div className="col-md-3 col-sm-4 col-6 mt-4">
      <Card style={{ cursor: "pointer" }} className="shadow">
        <CardImg top width="100%" src={imgSource} alt="Card image cap" />
        <CardBody>
          <CardTitle className="text-primary font-weight-bold">
            {name}
          </CardTitle>
          <CardSubtitle>{description}</CardSubtitle>
          <CardText className="font-weight-bold text-danger">
            ₱{price}{" "}
          </CardText>
          <Button color="success" size="md" block className="mt-2">
            Add to Cart
            <FontAwesomeIcon
              icon={faCartPlus}
              className="ml-2"
              color=""
            ></FontAwesomeIcon>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Product;
