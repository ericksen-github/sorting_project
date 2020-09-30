const timeController = 40; // 40 recommended
let timerTracker = 1;
const bubbleSort = (() => {
  const preBubble = (unsortedArray) => {
    console.log(sort(unsortedArray));
  };

  const sort = (unsortedArray) => {
    let len = unsortedArray.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < len; i++) {
        if (unsortedArray[i] > unsortedArray[i + 1]) {
          let tmp = unsortedArray[i];
          unsortedArray[i] = unsortedArray[i + 1];
          unsortedArray[i + 1] = tmp;

          swapped = true;
        }
      }
    } while (swapped);
    return unsortedArray;
  };

  return {
    preBubble,
  };
})();

export { bubbleSort };
