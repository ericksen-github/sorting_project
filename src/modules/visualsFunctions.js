// variables used to control timer functions
const timeController = 3; // 50 recommended
let timerTracker = 1;

let counter = 1;

const visualsFunctions = (() => {
  const handleHighlighting = (first, second, lowestIndex) => {
    const barWrapper = document.getElementById("barWrapper");

    const oneBar = barWrapper.childNodes[first.index];
    const twoBar = barWrapper.childNodes[second.index];

    const height = first.value;

    // timeouts used to slow down animations for user to see
    // timerTracker increases the timeout for each iteration so that the
    // animations are spaced correctly/not overlapping

    setTimeout(() => {
      oneBar.style.backgroundColor = "red";
      twoBar.style.backgroundColor = "red";

      barWrapper.childNodes[lowestIndex].style.height = `${height}px`;

      console.log(
        oneBar.style.backgroundColor,
        twoBar.style.backgroundColor,
        " bg after red assign"
      );

      console.log(counter, " counter");

      setTimeout(() => {
        oneBar.style.backgroundColor = "blue";
        twoBar.style.backgroundColor = "blue";

        console.log(
          oneBar.style.backgroundColor,
          twoBar.style.backgroundColor,
          " bg after red remove"
        );

        console.log(counter, " counter");
        counter++;
      }, timeController);
    }, timeController * timerTracker);
    timerTracker++;
  };

  const swapDivs = (current, lowestIndex) => {
    setTimeout(() => {
      const barWrapper = document.getElementById("barWrapper");

      barWrapper.childNodes[lowestIndex].style.height = `${current.value}px`;
    }, timeController * timerTracker);
    timerTracker++;
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
