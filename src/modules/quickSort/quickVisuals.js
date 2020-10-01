// variables used to control timer functions
const timeController = 100; // 3 recommended
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
      } else if ((type = "swapDiv")) {
        oneBar.style.height = `${first}px`;
        twoBar.style.height = `${second}px`;
      }
    }, timeController * timerTracker);
    timerTracker++;
  };
  return {
    handleVisuals,
  };
})();

export { quickVisuals };
