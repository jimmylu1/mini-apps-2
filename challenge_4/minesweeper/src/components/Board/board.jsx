import React, { Component } from "react";

export default class Board extends Component {
  constructor({ rows, columns }) {
    super({ rows, columns });

    this.state = {
      rows: this.createBoard({ rows, columns })
    };
  }
  createBoard = ({ rows, columns }) => {
    let board = [];
    for (let i = 0; i < rows; i++) {
      board.push([]);
      for (let j = 0; j < columns; j++) {
        board[i].push({
          r: j,
          c: i,
          mineCount: 0,
          open: false,
          hasMine: false,
          hasFlag: false
        });
      }
    }
  };
  render() {
    return <div className="board" />;
  }
}
