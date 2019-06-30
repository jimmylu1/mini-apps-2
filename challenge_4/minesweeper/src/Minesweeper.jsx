import React, { Component } from "react";
import Board from "./components/Board.jsx";
import Boardtop from "./components/Boardtop.jsx";

export default class Minesweeper extends Component {
  constructor() {
    super();

    this.state = {
      status: "waiting",
      rows: 10,
      columns: 10,
      flags: 10,
      mines: 10,
      time: 0,
      openCells: 0
    };
    this.intervals = [];
    this.tick = this.tick.bind(this);
    this.setInterval = this.setInterval.bind(this);
    this.handleCellClick = this.handleCellClick.bind(this);
  }

  tick = () => {
    if (this.state.openCells > 0 && this.state.status === "running") {
      let time = this.state.time + 1;
      this.setState({ time });
    }
  };

  setInterval = (fn, t) => {
    this.intervals.push(setInterval(fn, t));
  };

  handleCellClick = () => {
    if (this.state.openCells === 0 && this.state.status !== "running") {
      this.setState(
        {
          status: "running"
        },
        () => {
          this.setInterval(this.tick, 1000);
        }
      );
    }
  };

  render() {
    const { rows, columns, mines, time, flags, openCells } = this.state;
    return (
      <div className="minesweeper">
        <h3>Minesweeper React Native</h3>
        <Boardtop time={time} flagCount={flags} />
        <Board
          rows={rows}
          columns={columns}
          mines={mines}
          openCells={openCells}
          openCellClick={this.handleCellClick}
        />
      </div>
    );
  }
}
