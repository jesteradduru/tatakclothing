import React from "react";
import SearchBox from "../components/SearchBox/SearchBox";
import { Category } from "../components/FilterBy/FilterBy";
const App = () => {
  return (
    <div className="d-flex justify-content-between mt-5">
      <SearchBox />
      <Category />
    </div>
  );
};

export default App;
