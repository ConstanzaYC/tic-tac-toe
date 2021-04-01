import React from "react";
import './game.css';

const cellsValues = [1,2,3,4,5,6,7,8,9];

class Cell extends React.Component {
  render() {
    return (
      <button className="game-board__cell">{this.props.value}</button>
    );
  }
}

class Board extends React.Component {
  render() {
    return (
      <div className="game-board">
        {cellsValues.map((cellValue) => ( 
          <Cell value={cellValue} />
        ))}
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
