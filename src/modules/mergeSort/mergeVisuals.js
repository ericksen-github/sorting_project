// variables used to control timer functions
const timeController = 40; // 40 recommended
let timerTracker = 1;

const mergeVisuals = (() => {
  // combined all animations into one function to consolidate timer rounds
  // takes input for the type of animation it will output and adds to timer queue
  const swapColors = (type, first, second) => {
    const barWrapper = document.getElementById("barWrapper");

    const oneBar = barWrapper.childNodes[first.index];
    const twoBar = barWrapper.childNodes[second.index];

    setTimeout(() => {
      if (type == "red") {
        oneBar.style.backgroundColor = "red";
        twoBar.style.backgroundColor = "red";
      } else if (type == "blue") {
        oneBar.style.backgroundColor = "rgb(68, 68, 206)";
        twoBar.style.backgroundColor = "rgb(68, 68, 206)";
      }
    }, timeController * timerTracker);
    handleTimerSpeed();
  };

  const shiftDivs = (shiftArray) => {
    const barWrapper = document.getElementById("barWrapper");

    setTimeout(() => {
      for (let i = 0; i < shiftArray.length; i++) {
        const index = shiftArray[i].index;
        const height = shiftArray[i].value;

        barWrapper.childNodes[index].style.height = `${height}px`;
      }
    }, timeController * timerTracker);
    handleTimerSpeed();
  };

  // increases total timeout for each new animation.
  // speeds up animation process as it gets further along in sorting
  const handleTimerSpeed = () => {
    if (timerTracker < 400) {
      timerTracker++;
    } else if (timerTracker < 500) {
      timerTracker = timerTracker + 0.75;
    } else {
      timerTracker = timerTracker + 0.6;
    }
  };

  // resets timerTracker so that timeouts don't keep stacking on
  // subsequent array sorts
  const resetTimeTracker = () => {
    timerTracker = 1;
  };

  // used to disable buttons based on total timeout value
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
    timerTracker = timerTracker + 50;
    setTimeout(() => {
      for (let i = 0; i < endLength; i++) {
        const barWrapper = document.getElementById("barWrapper");
        barWrapper.childNodes[i].style.backgroundColor = "#b769ca";
      }
    }, timeController * timerTracker);
    timerTracker++;
  };

  return {
    resetTimeTracker,
    swapColors,
    shiftDivs,
    grabTimerValue,
    handleEnd,
  };
})();
export { mergeVisuals };
