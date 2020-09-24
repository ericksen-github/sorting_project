const visualsFunctions = (() => {
  const handleHighlighting = (left, right) => {
    const barWrapper = document.getElementById("barWrapper");

    barWrapper.childNodes[left.index].style.backgroundColor = "red";
    barWrapper.childNodes[right.index].style.backgroundColor = "red";

    barWrapper.childNodes[left.index].style.backgroundColor = "blue";
    barWrapper.childNodes[right.index].style.backgroundColor = "blue";
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
