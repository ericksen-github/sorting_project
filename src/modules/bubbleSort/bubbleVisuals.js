// variables used to control timer functions
const timeController = 5; // 5 recommended
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

  // spaces out timeouts to prevent them from overlapping. Reduces time between
  // timeouts as sorting goes on to speed up/prevent sort from dragging on too long
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

  const handleEnd = (endLength) => {
    setTimeout(() => {
      for (let i = 0; i < endLength; i++) {
        const barWrapper = document.getElementById("barWrapper");
        barWrapper.childNodes[i].style.backgroundColor = "rgb(119, 207, 60)";
      }
    }, timeController * timerTracker);
    timerTracker = timerTracker + 300;
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

export { bubbleVisuals };
