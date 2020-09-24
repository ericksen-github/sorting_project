const visualsFunctions = (() => {
  const timeController = 50;
  let timerTracker = 1;

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

  return {
    handleHighlighting,
    swapDivs,
  };
})();
export { visualsFunctions };
