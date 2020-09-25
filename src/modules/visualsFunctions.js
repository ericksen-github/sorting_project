// variables used to control timer functions
const timeController = 50;
let timerTracker = 1;

const visualsFunctions = (() => {
  const handleHighlighting = (first, second) => {
    const barWrapper = document.getElementById("barWrapper");

    const one = first.index;
    const two = second.index;

    // timeouts used to slow down animations for user to see
    // timerTracker increases the timeout for each iteration so that the
    // animations are spaced correctly/not overlapping
    setTimeout(() => {
      barWrapper.childNodes[one].style.backgroundColor = "red";
      barWrapper.childNodes[two].style.backgroundColor = "red";

      setTimeout(() => {
        barWrapper.childNodes[one].style.backgroundColor = "blue";
        barWrapper.childNodes[two].style.backgroundColor = "blue";
      }, timeController);
    }, timeController * timerTracker);

    timerTracker++;
  };

  const swapDivs = (current, lowest) => {
    setTimeout(() => {
      const barWrapper = document.getElementById("barWrapper");

      barWrapper.childNodes[lowest].style.height = `${current.value}px`;
    }, timeController * timerTracker);
  };

  // resets timerTracker so that timeouts don't keep stacking on
  // subsequent array sorts
  const resetTimeTracker = () => {
    timerTracker = 1;
  };

  return {
    resetTimeTracker,
    handleHighlighting,
    swapDivs,
  };
})();
export { visualsFunctions };
