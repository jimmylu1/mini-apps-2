import React, { Component } from "react";
import Row from "./Row.jsx";

export default class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: this.createBoard(props)
    };
    this.createBoard = this.createBoard.bind(this);
    this.open = this.open.bind(this);
  }

  createBoard = props => {
    let board = [];
    for (let i = 0; i < props.rows; i++) {
      board.push([]);
      for (let j = 0; j < props.columns; j++) {
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
    for (let x = 0; x < props.mines; x++) {
      let randomRow = Math.floor(Math.random() * props.rows);
      let randomCol = Math.floor(Math.random() * props.columns);

      let cell = board[randomRow][randomCol];

      if (cell.hasMine) {
        x--;
      }
      cell.hasMine = true;
    }
    return board;
  };

  open = cell => {
    let asyncCountMines = new Promise(resolve => {
      let mines = this.findMines(cell);
      resolve(mines);
    });
    asyncCountMines.then(numberOfMines => {
      let rows = this.state.rows;
      let current = rows[cell.r][cell.c];

      if (current.hasMine && this.props.openCells === 0) {
        console.log("cell already has mine, restart");
        let newRows = this.createBoard(this.props);
        this.setState(
          {
            rows: newRows
          },
          () => {
            this.open(cell);
          }
        );
      } else {
        if (!cell.hasFlag && !current.open) {
          this.props.openCellClick();

          current.open = true;
          current.count = numberOfMines;
          this.setState({ rows });
        }
      }
    });
  };

  findMines = cell => {
    let minesNear = 0;
    for (let row = -1; row <= 1; row++) {
      for (let col = -1; col <= 1; col++) {
        if (cell.j + row >= 0 && cell.i + col >= 0) {
          if (
            cell.j + row < this.state.rows.length &&
            cell.i + col < this.state.rows[0].length
          ) {
            if (
              this.state.rows[cell.j + row][cell.i + col].hasMine &&
              !(row === 0 && col === 0)
            ) {
              minesNear++;
            }
          }
        }
      }
    }
    return minesNear;
  };

  render() {
    let rows = this.state.rows.map((row, index) => {
      return <Row cells={row} key={index} open={this.open} />;
    });
    return <div className="board">{rows}</div>;
  }
}
