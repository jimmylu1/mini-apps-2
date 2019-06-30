import React from "react";

const Cell = props => {
  // console.log(props.data);
  let makeCell = () => {
    if (props.data.open) {
      return (
        <div className="cell open" onClick={() => props.open(props.data)} />
      );
    } else {
      return <div className="cell" onClick={() => props.open(props.data)} />;
    }
  };
  return makeCell();
};

export default Cell;
