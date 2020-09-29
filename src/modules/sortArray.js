import { visuals } from "./visuals";

const sortFunctions = (() => {
  // takes generated array and pushes each value and the index of its
  // location in the original array into unsortedArray
  const preMerge = (newArray) => {
    visuals.resetTimeTracker();
    let unsortedArray = [];

    // when setting index, i is an array of length 1. need [i][0]
    // to grab just the value of i to avoid storing the i array in index
    for (let i = 0; i < newArray.length; i++) {
      unsortedArray.push({ value: newArray[i], index: [i][0] });
    }

    mergeSort(unsortedArray);
  };

  // Merge Sort Algorithm from https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060
  function mergeSort(unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }

    const middle = Math.floor(unsortedArray.length / 2);

    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
  }

  // Merge the two arrays: left and right
  function merge(left, right) {
    let resultArray = [];

    let lowestIndex = findLowestIndex(left, right);

    // We will concatenate values into the resultArray in order
    // compares the value of each while ignoring the original location index
    while (0 < left.length && 0 < right.length) {
      visuals.runAnimations("red", left[0], right[0], lowestIndex);

      if (left[0].value < right[0].value) {
        // updates div with same value to new index location and iterates
        // lowestIndex by 1 to move on to next index location

        visuals.runAnimations("blue", left[0], right[0], lowestIndex);
        visuals.runAnimations("divSize", left[0], right[0], lowestIndex);

        left[0].index = lowestIndex;
        lowestIndex++;

        resultArray.push(left[0]);
        left.shift(); // removes value that was pushed to results
      } else {
        visuals.runAnimations("divSize", right[0], left[0], lowestIndex);
        visuals.runAnimations("blue", left[0], right[0], lowestIndex);

        right[0].index = lowestIndex;
        lowestIndex++;

        resultArray.push(right[0]);
        right.shift(); // removes value that was pushed to results

        let shiftArray = [];

        for (let i = 0; i < left.length; i++) {
          left[i].index = left[i].index + 1;

          const ele = { value: left[i].value, index: left[i].index };

          shiftArray.push(ele);
        }

        visuals.shiftDivs(shiftArray.slice(0));
      }
    } // end of while

    // if (left.length > 0) {
    //   left = handleEndArray(left, lowestIndex);
    // } else {
    //   right = handleEndArray(right, lowestIndex);
    // }

    // concat returns an array, so its result is assigned to endArray
    let endArray = resultArray.concat(left).concat(right);

    return endArray;
  }

  // at least 1 value is always left unindexed in either left or right
  // this takes remaining values, indexes them, swaps div locations, and
  // returns the updated array to the main function
  const handleEndArray = (current, lowestIndex) => {
    for (let i = 0; i < current.length; i++) {
      // send current[i] twice to account for second required input for function
      visuals.runAnimations("divSize", current[i], current[i], lowestIndex);

      current[i].index = lowestIndex;
      lowestIndex++;
    }

    return current;
  };

  // grabs index values from left and right and finds the lowest index to
  // know which div range to alter. for ex if low = 4, , the values of
  // the numbers in left and right correspond to div locations starting at 4.
  // this means that when assigning new indexes to DOM elements, only the indexes
  // associated with those values are available to assign.
  const findLowestIndex = (left, right) => {
    let bothArrays = [];
    left.forEach((ele) => {
      bothArrays.push(ele.index);
    });
    right.forEach((ele) => {
      bothArrays.push(ele.index);
    });

    return Math.min(...bothArrays);
  };

  return {
    preMerge,
    mergeSort,
  };
})();

export { sortFunctions };
