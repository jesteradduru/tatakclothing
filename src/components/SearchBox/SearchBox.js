import React from "react";
import {
  Input,
  InputGroup,
  Button,
  InputGroupAddon,
  FormGroup,
} from "reactstrap";

const SearchBox = () => {
  return (
    <FormGroup>
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <Button color="dark">Search</Button>
        </InputGroupAddon>
      </InputGroup>
    </FormGroup>
  );
};

export default SearchBox;
