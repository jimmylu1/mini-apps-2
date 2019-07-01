import React from "react";

const Cell = props => {
  // console.log(props.data);
  let makeCell = () => {
    if (props.data.open) {
      if (props.data.count === 0) {
        return (
          <div className="cell open" onClick={() => props.open(props.data)} />
        );
      } else if (props.data.hasMine) {
        return (
          <div className="cell" onClick={() => props.open(props.data)}>
            m
          </div>
        );
      } else {
        return (
          <div className="cell" onClick={() => props.open(props.data)}>
            {props.data.count}
          </div>
        );
      }
    } else {
      return <div className="cell" onClick={() => props.open(props.data)} />;
    }
  };
  return makeCell();
};

export default Cell;
