import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
  // calling state
  constructor(props) {
    super(props);

    this.state = {
      value: null,
    };
  }

  render() {
    const addSquareHandler = () => {
      this.setState({ value: "X" });
    };
    return (
      <button className="square" onClick={addSquareHandler}>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {
  // add state to board to enable lifting state up

  constructor(props) {
    super(props);
    this.state = {
      Squares: Array(9).fill(null),
    };
  }

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

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Game />);

// ReactDOM.render(<Game />, document.getElementById("root"));
