import React from "react";
import { useParams } from "react-router-dom";
import { Container, Col, Row, Button, FormGroup, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes } from "@fortawesome/free-solid-svg-icons";
import ButtonGroup from "reactstrap/lib/ButtonGroup";
import Variation from "../ProductDetails/Variation";
import ScrollBox from "../ScrollBox/ScrollBox";
const EditProductDetails = ({ changeUserAction }) => {
  let { productname } = useParams();
  const cancel = (action) => {
    changeUserAction(action);
  };
  return (
    <Container className="mt-5">
      <Row>
        <Col md="4">
          <img
            src="https://robohash.org/123"
            className="img-fluid mx-auto d-block shadow"
            alt="Product"
          />
          <FormGroup className="mt-3">
            <Input type="file" name="file" id="exampleFile" />
          </FormGroup>
        </Col>
        <Col md="8">
          <div className="d-flex flex-column justify-content-between h-100">
            <FormGroup>
              <Input
                type="text"
                placeholder="Product Name"
                value={productname}
              />
            </FormGroup>

            <FormGroup>
              <Input type="textarea" placeholder="Description" />
            </FormGroup>

            <h5 className="mt-2">Available Sizes</h5>
            <FormGroup>
              <Input
                type="text"
                placeholder="Use comma separator. Example: XS, S, M"
              />
            </FormGroup>

            <h5 className="mt-2">Add Variations</h5>
            <ScrollBox viewHeight="25vh" scrollDirection="horizontal">
              <div className="d-flex" style={{ width: "1000px" }}>
                <Variation imgSrc="https://robohash.org/33" />
                <Variation imgSrc="https://robohash.org/38" />
                <Variation imgSrc="https://robohash.org/39" />
                <Variation imgSrc="https://robohash.org/39" />
                <Variation imgSrc="https://robohash.org/39" />
                <Variation imgSrc="https://robohash.org/39" />
                <Variation imgSrc="https://robohash.org/39" />
                <Variation imgSrc="https://robohash.org/39" />
                <Variation imgSrc="https://robohash.org/38" />
                <Variation imgSrc="https://robohash.org/39" />
                <Variation imgSrc="https://robohash.org/39" />
                <Variation imgSrc="https://robohash.org/39" />
                <Variation imgSrc="https://robohash.org/39" />
              </div>
            </ScrollBox>
            <Row>
              <Col md="4">
                <FormGroup>
                  <Input type="text" placeholder="Shirt Color" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Input type="text" placeholder="Print Color" />
                </FormGroup>
              </Col>
              <Col md="4">
                <FormGroup>
                  <Input type="file" name="file" id="exampleFile" />
                </FormGroup>
              </Col>
              <Col>
                <Button color="primary">Add Variation</Button>
              </Col>
            </Row>

            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <FormGroup>
                <Input type="text" placeholder="Price" size="lg" />
              </FormGroup>
              <div>
                <ButtonGroup>
                  <Button
                    color="danger"
                    size="md"
                    onClick={() => cancel("view")}
                  >
                    Cancel
                    <FontAwesomeIcon
                      icon={faTimes}
                      className="ml-2"
                      color=""
                    ></FontAwesomeIcon>
                  </Button>
                  <Button color="success" size="md">
                    Save
                    <FontAwesomeIcon
                      icon={faSave}
                      className="ml-2"
                      color=""
                    ></FontAwesomeIcon>
                  </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default EditProductDetails;
