import React from "react";
import SearchBox from "../components/SearchBox/SearchBox";
import { Category } from "../components/FilterBy/FilterBy";
import { Button } from "reactstrap";
import { Link, useRouteMatch } from "react-router-dom";
const App = ({ accessLevel }) => {
  const match = useRouteMatch();
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
        <Link to={`${match.url}/addProduct`}>
          <Button color="primary" size="sm">
            Add a product
          </Button>
        </Link>
      </div>
    );
  }
};

export default App;
