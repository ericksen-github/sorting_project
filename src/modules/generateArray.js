import { sortFunctions } from "./sortArray";

let newArray;

const generateArrayFunctions = (() => {
  const generateArray = () => {
    const minNum = 5;
    const maxNum = 500;

    newArray = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * (maxNum - minNum + 1) + minNum)
    );
    createBars(newArray);
  };

  const createBars = (newArray) => {
    const container = document.getElementById("container");
    const barWrapper = document.createElement("div");
    container.appendChild(barWrapper);

    for (let i = 0; i < newArray.length; i++) {
      const newBar = document.createElement("div");
      newBar.classList.add("bar");
      newBar.style.height = `${newArray[i]}px`;
      barWrapper.appendChild(newBar);
    }
    console.log(sortFunctions.mergeSort(newArray));
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
