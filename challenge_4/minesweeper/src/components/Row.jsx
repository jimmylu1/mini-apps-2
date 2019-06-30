import React from "react";
import Cell from "./Cell.jsx";

const Row = props => {
  let cells = props.cells.map((data, index) => {
    return <Cell data={data} key={index} open={props.open} />;
  });

  return <div className="rows">{cells}</div>;
};

export default Row;
