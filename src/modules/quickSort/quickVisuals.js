// variables used to control timer functions
const timeController = 20; // 20 recommended
let timerTracker = 1;

const quickVisuals = (() => {
  const handleVisuals = (type, i, end, first, second) => {
    const barWrapper = document.getElementById("barWrapper");

    const oneBar = barWrapper.childNodes[i];
    const twoBar = barWrapper.childNodes[end];

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
        oneBar.style.height = `${first}px`;
        twoBar.style.height = `${second}px`;
      }
    }, timeController * timerTracker);
    handleTimerSpeed();
  };

  const handleTimerSpeed = () => {
    if (timerTracker < 1000) {
      timerTracker++;
    } else {
      timerTracker = timerTracker + 0.75;
    }
  };

  // resets timerTracker so that timeouts don't keep stacking on
  // subsequent array sorts
  const resetTimeTracker = () => {
    timerTracker = 1;
  };

  const grabTimerValue = () => {
    return [timerTracker, timeController];
  };

  return {
    handleVisuals,
    resetTimeTracker,
    grabTimerValue,
  };
})();

export { quickVisuals };
