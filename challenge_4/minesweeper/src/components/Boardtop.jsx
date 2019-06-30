import React from "react";

const Boardtop = ({ time, flagCount }) => {
  let minutes = Math.floor(time / 60);
  let seconds = time - minutes * 60 || 0;

  let format = seconds < 10 ? `0${seconds}` : seconds;
  let gameTime = `${minutes}:${format}`;
  return (
    <div className="board-top">
      <div className="flag-count">{flagCount}</div>
      <button className="reset">Reset</button>
      <div className="timer">{gameTime}</div>
    </div>
  );
};

export default Boardtop;
