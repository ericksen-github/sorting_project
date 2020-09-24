let timerTracker = 1;

const visualsFunctions = (() => {
  const timeController = 50;

  const handleHighlighting = (first, second) => {
    const barWrapper = document.getElementById("barWrapper");

    const one = first.index;
    const two = second.index;

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

  const swapDivs = (current, lowest, other) => {
    console.log(current, " vs ", other);

    setTimeout(() => {
      const barWrapper = document.getElementById("barWrapper");

      barWrapper.childNodes[lowest].style.height = `${current.value}px`;
    }, timeController * timerTracker);
  };

  const resetTimeTracker = () => {
    timerTracker = 1; // resets time tracker to allow new sorts without reloading page
  };

  return {
    resetTimeTracker,
    handleHighlighting,
    swapDivs,
  };
})();
export { visualsFunctions };
