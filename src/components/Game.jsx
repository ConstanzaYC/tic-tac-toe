import React from "react";
import './game.css';

function Cell(props) {
  return (
    <button className="game-board__cell" onClick={props.onClick}>{props.value}</button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: Array(9).fill(null),
      xIsNext: true,
    }
  }

  handleClick(i) {
    const cells = this.state.cells.slice();
    cells[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      cells: cells,
      xIsNext: !this.state.xIsNext,
    });
  };

  render() {
    return (
      <div className="game-board">
        {this.state.cells.map((cell, i) =>{
          return (
            <Cell value={cell} key={i} onClick={() => this.handleClick(i)}/>
          )
        })}
      </div>
    );
  }
}
const Game = () => {
  return (
    <>
      <Board />
      <p>Next player:</p>
    </>
  );
};

export default Game;

// TO DO:
// Hide all button values and add onClick method to show them

// Next
// Improves styles
// Config sass (maybe)
// Possibility of adding names so you can know which is the next player