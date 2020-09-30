const disableButtons = (timeArray) => {
  const createArrayButton = document.getElementById("createNewArray");
  const mergeButton = document.getElementById("mergeSort");
  const bubbleButton = document.getElementById("bubbleSort");

  const buttonsArray = [createArrayButton, mergeButton, bubbleButton];

  buttonsArray.forEach((btn) => {
    btn.classList.add("disable");
  });

  setTimeout(() => {
    buttonsArray.forEach((btn) => {
      btn.classList.remove("disable");
    });
  }, timeArray[0] * timeArray[1] + 100); // timeTracker * timeController
};

export { disableButtons };
