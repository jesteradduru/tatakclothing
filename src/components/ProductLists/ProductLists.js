import React from "react";
import Product from "../Product/Product";
const ProductLists = ({ url }) => {
  return (
    <div className="row">
      <Product
        imgSource="https://robohash.org/123"
        name="GGHL"
        price="280"
        description="God is greater than Highs and Lows"
        url={url}
      />
    </div>
  );
};

export default ProductLists;
