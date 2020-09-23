const visualsFunctions = (() => {
  const handleVisuals = (left, right) => {
    const barWrapper = document.getElementById("barWrapper");

    barWrapper.childNodes[left.index].style.backgroundColor = "red";

    barWrapper.childNodes[right.index].style.backgroundColor = "red";
  };

  const swapDivs = (left, right) => {
    const barWrapper = document.getElementById("barWrapper");
    const temp = left.index;

    barWrapper.childNodes[left.index].style.height = `${right.value}px`;
    barWrapper.childNodes[right.index].style.height = `${left.value}px`;

    left.index = right.index;
    right.index = temp;

    return [left, right];
  };

  return {
    handleVisuals,
    swapDivs,
  };
})();
export { visualsFunctions };
