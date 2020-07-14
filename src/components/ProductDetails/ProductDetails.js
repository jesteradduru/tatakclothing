import React from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Button } from "reactstrap";
import ScrollBox from "../ScrollBox/ScrollBox";
import Variation from "./Variation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
const ProductDetails = () => {
  let { id } = useParams();
  return (
    <Container className="mt-5">
      <Row>
        <Col md="4">
          <img
            src="https://robohash.org/123"
            className="img-fluid mx-auto d-block"
          />
        </Col>
        <Col md="8">
          <div className="d-flex flex-column justify-content-between h-100">
            <div>
              <h3>GGHL</h3>

              <p>God is greater than Highs and Lows.</p>

              <h5 className="mt-2">Select Size</h5>
              <div className="d-flex">
                <div className="py-0 px-3 border">
                  <h5 className="text-primary">XS</h5>
                </div>
                <div className="py-0 px-3 border">
                  <h5 className="text-primary">S</h5>
                </div>
                <div className="py-0 px-3 border">
                  <h5 className="text-primary">M</h5>
                </div>
                <div className="py-0 px-3 border">
                  <h5 className="text-primary">L</h5>
                </div>
                <div className="py-0 px-3 border">
                  <h5 className="text-primary">XL</h5>
                </div>
                <div className="py-0 px-3 border">
                  <h5 className="text-primary">XXL</h5>
                </div>
              </div>

              <h5 className="mt-2">Choose Variation</h5>
              <div className="ml-3">
                <p className="lead">Shirt Color: White, Print: Black</p>
              </div>
              <ScrollBox viewHeight="25vh" scrollDirection="horizontal">
                <div className="d-flex" style={{ width: "1000px" }}>
                  <Variation imgSrc="https://robohash.org/33" />
                  <Variation imgSrc="https://robohash.org/38" />
                  <Variation imgSrc="https://robohash.org/39" />
                  <Variation imgSrc="https://robohash.org/40" />
                  <Variation imgSrc="https://robohash.org/41" />
                  <Variation imgSrc="https://robohash.org/4123" />
                </div>
              </ScrollBox>
            </div>
            <div className="d-flex align-items-center mt-2">
              <span className="lead mr-3">Quantity:</span>
              <Button size="sm" color="danger">
                -
              </Button>
              <span className="mx-2">1</span>
              <Button size="sm" color="danger">
                +
              </Button>
            </div>
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="text-danger display-3">₱280</h1>
              <div>
                <Button color="success" size="md">
                  Add to Cart
                  <FontAwesomeIcon
                    icon={faCartPlus}
                    className="ml-2"
                    color=""
                  ></FontAwesomeIcon>
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
