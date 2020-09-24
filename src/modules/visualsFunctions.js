let timerTracker = 1;

const visualsFunctions = (() => {
  const timeController = 50;

  const handleHighlighting = (left, right) => {
    const barWrapper = document.getElementById("barWrapper");
    setTimeout(() => {
      barWrapper.childNodes[left].style.backgroundColor = "red";
      barWrapper.childNodes[right].style.backgroundColor = "red";

      setTimeout(() => {
        barWrapper.childNodes[left].style.backgroundColor = "blue";
        barWrapper.childNodes[right].style.backgroundColor = "blue";
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
