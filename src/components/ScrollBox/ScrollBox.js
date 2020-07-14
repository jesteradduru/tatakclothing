import React from "react";

const ScrollBox = ({ children, viewHeight, scrollDirection }) => {
  if (scrollDirection === "vertical") {
    return (
      <div
        style={{
          overflowY: "scroll",
          overflowX: "hidden",
          height: viewHeight,
        }}
      >
        {children}
      </div>
    );
  } else {
    return (
      <div
        style={{
          overflowX: "scroll",
          overflowY: "hidden",
          height: viewHeight,
        }}
      >
        {children}
      </div>
    );
  }
};

export default ScrollBox;
