const timeController = 10; // 40 recommended
let timerTracker = 1;
const bubbleSort = (() => {
  const preBubble = (unsortedArray) => {
    console.log(sort(unsortedArray));
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
    timerTracker++;
  };

  return {
    preBubble,
  };
})();

export { bubbleSort };
