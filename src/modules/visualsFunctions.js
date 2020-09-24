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

  const swapDivs = (left, right) => {
    const barWrapper = document.getElementById("barWrapper");

    barWrapper.childNodes[left.index].style.height = `${right.value}px`;
    barWrapper.childNodes[right.index].style.height = `${left.value}px`;

    left.index = right.index;

    return [left];
  };

  return {
    handleHighlighting,
    swapDivs,
  };
})();
export { visualsFunctions };
