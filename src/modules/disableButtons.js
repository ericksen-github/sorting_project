const disableButtons = (timeArray) => {
  const createArrayButton = document.getElementById("createNewArray");
  const mergeButton = document.getElementById("mergeSort");
  const bubbleButton = document.getElementById("bubbleSort");
  const heapsButton = document.getElementById("heapSort");
  const quickButton = document.getElementById("quickSort");
  const tutorialButton = document.getElementById("tutorial");

  const buttonsArray = [
    createArrayButton,
    mergeButton,
    bubbleButton,
    heapsButton,
    quickButton,
    tutorialButton,
  ];

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
