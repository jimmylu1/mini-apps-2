import React, { Component } from "react";
import Board from "./components/Board/board.jsx";

export default class Minesweeper extends Component {
  constructor() {
    super();

    this.state = {
      rows: 10,
      columns: 10,
      flags: 10,
      mines: 10
    };
  }

  render() {
    const { rows, columns } = this.state;
    return (
      <div className="minesweeper">
        <Board rows={rows} columns={columns} />
      </div>
    );
  }
}
