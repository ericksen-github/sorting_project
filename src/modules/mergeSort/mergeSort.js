import { mergeVisuals } from "./mergeVisuals";
import { disableButtons } from "../disableButtons";

const mergeSort = (() => {
  const preMerge = (newArray) => {
    mergeVisuals.resetTimeTracker();
    let unsortedArray = [];

    // takes generated array and pushes each value and the index of its
    // location in the original array into unsortedArray
    // when setting index, i is an array of length 1. need [i][0]
    // to grab just the value of i to avoid storing the i array in index
    for (let i = 0; i < newArray.length; i++) {
      unsortedArray.push({ value: newArray[i], index: [i][0] });
    }

    sort(unsortedArray);

    disableButtons(mergeVisuals.grabTimerValue());
  };

  function sort(unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }

    const middle = Math.floor(unsortedArray.length / 2);
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    return merge(sort(left), sort(right));
  }

  // Merge the two arrays: left and right
  function merge(left, right) {
    let resultArray = [];

    // We will concatenate values into the resultArray in order
    // compares the value of each while ignoring the original location index
    while (0 < left.length && 0 < right.length) {
      mergeVisuals.swapColors("red", left[0], right[0]);

      if (left[0].value < right[0].value) {
        mergeVisuals.swapColors("blue", left[0], right[0]);

        resultArray.push(left[0]);
        left.shift(); // removes value that was pushed to results
      } else {
        mergeVisuals.swapColors("blue", left[0], right[0]);

        // updates right[0].index to left[0].index which allows shiftDivs
        // to put it in the correct/next location in DOM.
        // left[0].index will always be the next/lowest location
        right[0].index = left[0].index;
        resultArray.push(right[0]);

        handleShiftBars(left, right);
        right.shift(); // removes value that was pushed to results
      }
    } // end of while

    return resultArray.concat(left).concat(right);
  }

  // create array of objs to send to shiftDivs to move the entire range of
  // divs/values that werent pushed. shifts only occur when right side is pushed as
  // left side is already in correct index location when it is pushed
  const handleShiftBars = (left, right) => {
    let shiftArray = [];
    shiftArray.push({ value: right[0].value, index: right[0].index });

    for (let i = 0; i < left.length; i++) {
      left[i].index = left[i].index + 1;
      shiftArray.push({ value: left[i].value, index: left[i].index });
    }
    mergeVisuals.shiftDivs(shiftArray);
  };

  return {
    preMerge,
    sort,
  };
})();

export { mergeSort };
