import React from "react";
import Button from "@material-ui/core/Button";

import { createNewBoard, updateBoard } from "../functions/game-play";
import { generateRandomBoard } from "../functions/helper-functions";

const Buttons = ({
  board,
  setBoard,
  gridSize,
  isGenerating,
  setIsGenerating,
  genCount,
  setGenCount,
  intervalId,
  setInvertalId,
  speed,
}) => {
  const startGame = () => {
    let intId = setInterval(() => {
      let newBoard = updateBoard(board);
      board = newBoard;
      setBoard(newBoard);
      setGenCount(genCount++);
    }, speed);
    setInvertalId(intId);
  };

  const pauseGame = () => {
    setIsGenerating(false);
    clearInterval(intervalId);
  };

  const clearBoard = () => {
    setIsGenerating(false);
    setBoard(createNewBoard(gridSize));
    setGenCount(0);
    clearInterval(intervalId);
  };

  const nextGeneration = (currBoard) => {
    let newBoard = updateBoard(currBoard);
    board = newBoard;
    setBoard(newBoard);
    setGenCount((genCount += 1));
  };

  return (
    <div style={{ marginBottom: "10px" }} className="button-container">
      <Button
        onClick={() => {
          if (!isGenerating) {
            setIsGenerating(true);
            startGame();
          } else {
            pauseGame();
          }
        }}
        className="gameButton"
        style={{ background: "#03DAC6" }}
      >
        Start
      </Button>

      <Button
        onClick={pauseGame}
        className="gameButton"
        style={{ background: "#FF8C00" }}
      >
        Pause
      </Button>

      <Button
        onClick={clearBoard}
        className="gameButton"
        style={{ background: "#B00020" }}
      >
        Clear
      </Button>

      <Button
        onClick={() => {
          setGenCount(0);
          clearInterval(intervalId);
          setIsGenerating(false);
          setBoard(generateRandomBoard(gridSize));
        }}
        className="gameButton"
        style={{ background: "#2069E0" }}
      >
        Random
      </Button>

      <Button
        onClick={() => {
          nextGeneration(board);
        }}
        className="gameButton"
        style={{ background: "#BB86FC" }}
      >
        Next Generation
      </Button>
    </div>
  );
};

export default Buttons;
