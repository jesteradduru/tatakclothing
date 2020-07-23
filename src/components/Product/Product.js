import React from "react";
import {
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Product = ({ imgSource, name, price, description, url }) => {
  return (
    <div className="col-md-3 col-sm-4 col-6 mt-4">
      <Link to={`${url}/${name}`} className="card shadow">
        <CardImg top width="100%" src={imgSource} alt="Card image cap" />
        <CardBody>
          <CardTitle className="text-primary font-weight-bold">
            {name}
          </CardTitle>
          <CardSubtitle>{description}</CardSubtitle>
          <CardText className="font-weight-bold text-danger">
            ₱{price}{" "}
          </CardText>
          <Button color="success" size="sm" block className="mt-2">
            View Product
            <FontAwesomeIcon
              icon={faCartPlus}
              className="ml-2"
              color=""
            ></FontAwesomeIcon>
          </Button>
        </CardBody>
      </Link>
    </div>
  );
};

export default Product;
