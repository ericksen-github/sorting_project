// variables used to control timer functions
const timeController = 3; // 3 recommended
let timerTracker = 1;

const bubbleVisuals = (() => {
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

  const grabTimerValue = () => {
    return [timerTracker, timeController];
  };

  return {
    handleVisuals,
    resetTimeTracker,
    grabTimerValue,
  };
})();

export { bubbleVisuals };
