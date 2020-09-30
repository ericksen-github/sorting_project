// variables used to control timer functions
const timeController = 10; // 50 recommended
let timerTracker = 1;

const visuals = (() => {
  // combined all animations into one function to consolidate timer rounds
  // takes input for the type of animation it will output and adds to timer queue
  const runAnimations = (type, first, second) => {
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

  const handleTimerSpeed = () => {
    if (timerTracker < 500) {
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
    resetTimeTracker,
    runAnimations,
    shiftDivs,
    grabTimerValue,
  };
})();
export { visuals };
