import React from "react";
import Header from "./Header";

const Rules = () => {
  return (
    <div className="rules">
      <Header />
      <div className="text-container">
        <p>
          Cambridge mathematician John Conway invended the Game of Life in the
          late 1960's. The game is a cellular automaton played on a two
          dimensional grid of cells. The user chooses the first generation and
          the following generations are based upon a set of rules. These rules
          are followed out without any more user input, which makes the Game of
          Life a zero-player-game.
        </p>

        <p>
          Cells can only exist within two states, alive or dead. The two states
          a cell will be in the next generation will be deteremined by the
          neighboring cells that directly touch the active cell.
        </p>

        <h3>The Rules</h3>
        <ul>
          <li>
            Any live cell with fewer than two live neighbours dies, as if by
            underpopulation.
          </li>
          <li>
            Any live cell with two or three live neighbours lives on to the next
            generation.
          </li>
          <li>
            Any live cell with more than three live neighbours dies, as if by
            overpopulation.
          </li>
          <li>
            Any dead cell with exactly three live neighbours becomes a live
            cell, as if by reproduction.
          </li>
        </ul>
        <p></p>
      </div>
    </div>
  );
};

export default Rules;
