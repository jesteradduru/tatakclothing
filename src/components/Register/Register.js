import React from "react";
import { Input, Button, Card, FormGroup } from "reactstrap";
const Register = () => {
  return (
    <Card
      className="mx-auto py-5 px-4 shadow mt-md-5 my-5"
      style={{ maxWidth: "370px" }}
    >
      <h1 className="text-center text-primary">Register</h1>
      <hr />
      <FormGroup>
        <Input type="text" placeholder="Firstname" />
      </FormGroup>
      <FormGroup>
        <Input type="text" placeholder="Lastname" />
      </FormGroup>
      <FormGroup>
        <Input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Input type="password" placeholder="Password" />
      </FormGroup>
      <Button color="primary">Register</Button>
    </Card>
  );
};

export default Register;
