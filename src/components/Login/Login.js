import React from "react";
import { Input, Button, Card, FormGroup } from "reactstrap";
const Login = () => {
  return (
    <Card
      className="mx-auto py-5 px-4 shadow mt-md-5 my-5"
      style={{ maxWidth: "330px" }}
    >
      <h1 className="text-center text-primary">Login</h1>
      <hr />
      <FormGroup>
        <Input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Input type="password" placeholder="Password" />
      </FormGroup>
      <Button color="primary">Login</Button>
    </Card>
  );
};

export default Login;
