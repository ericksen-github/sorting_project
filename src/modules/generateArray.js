// variables used to control array size and length
const minNum = 25; // lowest possible value (lower than 25 hard to see on DOM)
const maxNum = 400; // highest possible value
const length = 100; // total array size

let newArray; // array that stores inital values

const generateArrayFunctions = (() => {
  // creates array of random values
  const generateArray = () => {
    newArray = Array.from({ length: length }, () =>
      Math.floor(Math.random() * (maxNum - minNum + 1) + minNum)
    );
    createBars(newArray);
  };

  // creates DOM bars based on array values
  const createBars = (newArray) => {
    const container = document.getElementById("container");
    const barWrapper = document.createElement("div");
    barWrapper.id = "barWrapper";
    container.appendChild(barWrapper);

    for (let i = 0; i < newArray.length; i++) {
      const newBar = document.createElement("div");
      newBar.classList.add("bar");
      newBar.style.height = `${newArray[i]}px`; // sets bar height to generated value
      barWrapper.appendChild(newBar);
    }
  };

  const clearBars = () => {
    const container = document.getElementById("container");
    container.removeChild(container.lastElementChild);
  };

  return {
    generateArray,
    clearBars,
  };
})();
export { generateArrayFunctions, newArray };
