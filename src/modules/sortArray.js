import { visualsFunctions } from "./visualsFunctions";

const sortFunctions = (() => {
  // takes generated array and pushes each value and the index of its
  // location in the original array into unsortedArray
  const preMerge = (newArray) => {
    visualsFunctions.resetTimeTracker();
    let unsortedArray = [];

    // when setting index, i is an array of length 1. need [i][0]
    // to grab just the value of i to avoid storing the i array in index
    for (let i = 0; i < newArray.length; i++) {
      unsortedArray.push({ value: newArray[i], index: [i][0] });
    }

    console.log(mergeSort(unsortedArray));
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
    let resultArray = [],
      leftIndex = 0,
      rightIndex = 0;

    // grabs index values from left and right and finds the lowest
    // and highest indexes to know which div range to alter
    // for ex if low = 4 high = 7, the values of the numbers in left and right
    // correspond to div locations 4 through 7. this means that when assigning
    // new indexes to DOM elements, only the indexes associated with those values are
    // available to assign.
    let lengthArray = [];
    left.forEach((ele) => {
      lengthArray.push(ele.index);
    });
    right.forEach((ele) => {
      lengthArray.push(ele.index);
    });

    let lowestIndex = Math.min(...lengthArray);

    // We will concatenate values into the resultArray in order
    // compares the value of each while ignoring the original location index
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex].value < right[rightIndex].value) {
        visualsFunctions.handleHighlighting(
          left[leftIndex],
          right[rightIndex],
          lowestIndex
        );

        // updates div with same value to new index location and iterates
        // lowestIndex by 1 to move on to next index location
        left[leftIndex].index = lowestIndex;
        lowestIndex++;

        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        visualsFunctions.handleHighlighting(
          right[rightIndex],
          left[leftIndex],
          lowestIndex
        );

        right[rightIndex].index = lowestIndex;
        lowestIndex++;

        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
      }
    } // end of while

    let leftEnd = left.slice(leftIndex);
    let rightEnd = right.slice(rightIndex);

    if (leftEnd.length > 0) {
      leftEnd = handleEndArray(leftEnd, lowestIndex);
    } else {
      rightEnd = handleEndArray(rightEnd, lowestIndex);
    }

    // concat returns an array, so its result is assigned to endArray
    let endArray = resultArray.concat(leftEnd).concat(rightEnd);

    return endArray;
  }

  // at least 1 value is always left unindexed in either left or right
  // this takes remaining values, indexes them, swaps div locations, and
  // returns the updated array to the main function
  const handleEndArray = (current, lowestIndex) => {
    for (let i = 0; i < current.length; i++) {
      visualsFunctions.swapDivs(current[i], lowestIndex);

      current[i].index = lowestIndex;
      lowestIndex++;
    }

    return current;
  };

  return {
    preMerge,
    mergeSort,
  };
})();

export { sortFunctions };
