import React from "react";
import { Card } from "reactstrap";
const Variation = ({ imgSrc }) => {
  return (
    <Card style={{ cursor: "pointer", minWidth: "150px" }}>
      <img src={imgSrc} alt="variation" className="img-fluid" />
    </Card>
  );
};

export default Variation;
