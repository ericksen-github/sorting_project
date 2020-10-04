// variables used to control timer functions
const timeController = 10; // 10 recommended
let timerTracker = 1;

const heapVisuals = (() => {
  const handleVisuals = (type, firstIndex, secondIndex, vOne, vTwo) => {
    const barWrapper = document.getElementById("barWrapper");

    const oneBar = barWrapper.childNodes[firstIndex];
    const twoBar = barWrapper.childNodes[secondIndex];

    setTimeout(() => {
      if (type == "red") {
        oneBar.style.backgroundColor = "red";
        twoBar.style.backgroundColor = "red";
      } else if (type == "blue") {
        oneBar.style.backgroundColor = "rgb(68, 68, 206)";
        twoBar.style.backgroundColor = "rgb(68, 68, 206)";
      } else if (type == "green") {
        oneBar.style.backgroundColor = "rgb(119, 207, 60)";
        twoBar.style.backgroundColor = "rgb(119, 207, 60)";
      } else if ((type = "swapDiv")) {
        oneBar.style.height = `${vOne}px`;
        twoBar.style.height = `${vTwo}px`;
      }
    }, timeController * timerTracker);
    timerTracker++;
  };

  // resets timerTracker so that timeouts don't keep stacking on
  // subsequent array sorts
  const resetTimeTracker = () => {
    timerTracker = 1;
  };

  const grabTimerValue = () => {
    return [timerTracker, timeController];
  };

  const handleEnd = (endLength) => {
    setTimeout(() => {
      for (let i = 0; i < endLength; i++) {
        const barWrapper = document.getElementById("barWrapper");
        barWrapper.childNodes[i].style.backgroundColor = "rgb(119, 207, 60)";
      }
    }, timeController * timerTracker);
    timerTracker = timerTracker + 100;
    setTimeout(() => {
      for (let i = 0; i < endLength; i++) {
        const barWrapper = document.getElementById("barWrapper");
        barWrapper.childNodes[i].style.backgroundColor = "#b769ca";
      }
    }, timeController * timerTracker);
    timerTracker++;
  };

  return {
    handleVisuals,
    resetTimeTracker,
    grabTimerValue,
    handleEnd,
  };
})();

export { heapVisuals };
