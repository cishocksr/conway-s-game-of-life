import React from "react";

const Logic = ({
  gridSize,
  setGridSize,
  setBoard,
  setIsGenerating,
  intervalId,
  setGenCount,
  speed,
  setSpeed,
  cellColor,
  setCellColor,
}) => {
  const handleSpeed = (e) => {
    setSpeed(e.target.value);
  };

  const handleBoardSize = (e) => {
    setIsGenerating(false);
    clearInterval(intervalId);
    setGridSize(e.target.value);
    setGenCount(0);
  };

  const handleCellColor = (e) => {
    setCellColor(e.target.value);
  };

  return (
    <div className="controlsContainer">
      <div className="inputDiv">
        <label>Speed</label>
        <input
          className="speed"
          onChange={handleSpeed}
          value={speed}
          type="number"
        />
      </div>

      <div className="inputDiv">
        <label>Board Size</label>
        <select
          onChange={handleBoardSize}
          value={gridSize}
          className="inputField"
        >
          <option value={25}>Normal</option>
          <option value={35}>Larger</option>
          <option value={40}>Largerest</option>
        </select>
      </div>

      <div className="inputDiv">
        <label>Cell Color</label>
        <select
          onChange={handleCellColor}
          value={cellColor}
          className="inputField"
        >
          <option value="random">Random</option>
          <option value="black">Black</option>
          <option value="#03DAC6">Teal</option>
          <option value="#FF8C00">Orange</option>
          <option value="#2069E0">Blue</option>
          <option value="#BB86FC">Purple</option>
        </select>
      </div>
    </div>
  );
};

export default Logic;
