import { createNewBoard } from "./game-play";

export const generateRandomBoard = (size) => {
  let mainArray = [];

  for (let i = 0; i < size; i++) {
    let subArray = [];
    for (let j = 0; j < size; j++) {
      subArray.push({ status: Math.round(Math.random()), location: [i, j] });
    }
    mainArray.push(subArray);
  }
  return mainArray;
};

const square = (size) => {
  let mainArray = [];

  for (let i = 0; i < size; i++) {
    let subArray = [];
    for (let j = 0; j < size; j++) {
      if (i === 0 || i === size - 1 || j === 0 || j === size - 1) {
        subArray.push({ status: 1, location: [i, j] });
      } else {
        subArray.push({ status: 0, location: [i, j] });
      }
    }
    mainArray.push(subArray);
  }
  return mainArray;
};

const horizontalLine = (size) => {
  let mainArray = [];

  for (let i = 0; i < size; i++) {
    let subArray = [];
    let mid = Math.floor(size / 2);
    for (let j = 0; j < size; j++) {
      if (i === mid) {
        subArray.push({ status: 1, location: [i, j] });
      } else {
        subArray.push({ status: 0, location: [i, j] });
      }
    }
    mainArray.push(subArray);
  }
  return mainArray;
};

const cross = (size) => {
  let mainArray = [];

  for (let i = 0; i < size; i++) {
    let subArray = [];
    let mid = Math.floor(size / 2);
    for (let j = 0; j < size; j++) {
      if (i === mid || j === mid) {
        subArray.push({ status: 1, location: [i, j] });
      } else {
        subArray.push({ status: 0, location: [i, j] });
      }
    }
    mainArray.push(subArray);
  }
  return mainArray;
};
