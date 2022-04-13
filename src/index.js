import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// sqaure component
class Square extends React.Component {
  // add a constructor function
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    const addSquareHandler = (event) => {
      this.setState({ value: "X" });
      event.preventDefault();
      console.log("You clicked a button on the board");
    };

    return (
      <button className="square" onClick={addSquareHandler}>
        {this.state.value}
      </button>
    );
  }
}

// Board component
class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// Game component
class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
