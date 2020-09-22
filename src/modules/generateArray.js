let newArray;

const generateArray = () => {
  const minNum = 5;
  const maxNum = 500;

  newArray = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * (maxNum - minNum + 1) + minNum)
  );
  createBars(newArray);
};

const createBars = (newArray) => {
  const barWrapper = document.getElementById("barWrapper");
  for (let i = 0; i < newArray.length; i++) {
    const newBar = document.createElement("div");
    newBar.classList.add("bar");
    newBar.style.height = `${newArray[i]}px`;
    barWrapper.appendChild(newBar);
  }
};

export { generateArray, newArray };
