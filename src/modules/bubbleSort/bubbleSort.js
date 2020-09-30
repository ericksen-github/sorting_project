const timeController = 3; // 3 recommended
let timerTracker = 1;
const bubbleSort = (() => {
  const preBubble = (unsortedArray) => {
    resetTimeTracker();
    sort(unsortedArray);
    disableButtons();
  };

  const sort = (unsortedArray) => {
    let len = unsortedArray.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < len; i++) {
        if (unsortedArray[i + 1]) {
          handleVisuals("red", unsortedArray[i], unsortedArray[i + 1], i);

          if (unsortedArray[i] > unsortedArray[i + 1]) {
            let tmp = unsortedArray[i];
            unsortedArray[i] = unsortedArray[i + 1];
            unsortedArray[i + 1] = tmp;

            handleVisuals("swapDiv", unsortedArray[i], unsortedArray[i + 1], i);
            swapped = true;
          }
          handleVisuals("blue", unsortedArray[i], unsortedArray[i + 1], i);
        }
      }
    } while (swapped);
    return unsortedArray;
  };

  const handleVisuals = (type, first, second, i) => {
    const barWrapper = document.getElementById("barWrapper");

    const oneBar = barWrapper.childNodes[i];
    const twoBar = barWrapper.childNodes[i + 1];

    setTimeout(() => {
      if (type == "red") {
        oneBar.style.backgroundColor = "red";
        twoBar.style.backgroundColor = "red";
      } else if (type == "blue") {
        oneBar.style.backgroundColor = "rgb(68, 68, 206)";
        twoBar.style.backgroundColor = "rgb(68, 68, 206)";
      } else if ((type = "swapDiv")) {
        oneBar.style.height = `${first}px`;
        twoBar.style.height = `${second}px`;
      }
    }, timeController * timerTracker);
    handleTimerSpeed();
  };

  const handleTimerSpeed = () => {
    if (timerTracker < 2500) {
      timerTracker++;
    } else if (timerTracker < 5000) {
      timerTracker = timerTracker + 0.75;
    } else if (timerTracker < 7500) {
      timerTracker = timerTracker + 0.5;
    } else {
      timerTracker = timerTracker + 0.25;
    }
  };

  // resets timerTracker so that timeouts don't keep stacking on
  // subsequent array sorts
  const resetTimeTracker = () => {
    timerTracker = 1;
  };

  const disableButtons = () => {
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
    }, timeController * timerTracker + 100); // timeTracker * timeController
  };

  return {
    preBubble,
  };
})();

export { bubbleSort };
