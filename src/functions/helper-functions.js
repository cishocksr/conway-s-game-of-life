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
