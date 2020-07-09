import React from "react";
import { Input, FormGroup, Label } from "reactstrap";

export const Category = () => {
  return (
    <FormGroup className="d-flex align-items-center ml-2">
      <Label>Categories:</Label>
      <Input type="select" className="ml-2">
        <option>All</option>
        <option>Gospel Shirts</option>
      </Input>
    </FormGroup>
  );
};
