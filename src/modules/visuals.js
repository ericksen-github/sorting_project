// variables used to control timer functions
const timeController = 3; // 50 recommended
let timerTracker = 1;

const visuals = (() => {
  // combined all animations into one function to consolidate timer rounds
  // takes input for the type of animation it will output and adds to timer queue
  const runAnimations = (type, first, second, lowestIndex) => {
    const barWrapper = document.getElementById("barWrapper");

    const oneBar = barWrapper.childNodes[first.index];
    const twoBar = barWrapper.childNodes[second.index];

    const height = first.value;

    setTimeout(() => {
      if (type == "red") {
        oneBar.style.backgroundColor = "red";
        twoBar.style.backgroundColor = "red";
      } else if (type == "blue") {
        oneBar.style.backgroundColor = "blue";
        twoBar.style.backgroundColor = "blue";
      } else if (type == "divSize") {
        barWrapper.childNodes[lowestIndex].style.height = `${height}px`;
      }
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
    runAnimations,
  };
})();
export { visuals };
