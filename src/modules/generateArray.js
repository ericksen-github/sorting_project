let newArray;

const generateArrayFunctions = (() => {
  const generateArray = () => {
    const minNum = 5; // used to set range of array numbers
    const maxNum = 20;
    const length = 4; // total array size

    newArray = Array.from({ length: length }, () =>
      Math.floor(Math.random() * (maxNum - minNum + 1) + minNum)
    );
    createBars(newArray);
  };

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
