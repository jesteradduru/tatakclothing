import React from "react";
import SearchBox from "../components/SearchBox/SearchBox";
import { Category } from "../components/FilterBy/FilterBy";
import { Button } from "reactstrap";
const App = ({ accessLevel }) => {
  if (accessLevel !== "admin") {
    return (
      <div className="d-md-flex justify-content-between mt-5 ">
        <SearchBox />
        <Category />
      </div>
    );
  } else {
    return (
      <div className="d-md-flex justify-content-between mt-5 ">
        <SearchBox />
        <Button color="primary" size="sm">
          Add a product
        </Button>
      </div>
    );
  }
};

export default App;
