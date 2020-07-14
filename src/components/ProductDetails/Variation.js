import React from "react";
import { Card } from "reactstrap";
const Variation = ({ imgSrc }) => {
  return (
    <Card style={{ cursor: "pointer" }}>
      <img src={imgSrc} alt="variation" className="img-fluid" />
    </Card>
  );
};

export default Variation;
