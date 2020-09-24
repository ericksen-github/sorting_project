import { visualsFunctions } from "./visualsFunctions";

const sortFunctions = (() => {
  // takes generated array and pushes each value and the index of its
  // location in the original array into unsortedArray
  const preMerge = (newArray) => {
    let unsortedArray = [];

    // i comes out as array on index, needs [0] to grab just num
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
    const highestIndex = Math.max(...lengthArray);

    // We will concatenate values into the resultArray in order
    // compares the value of each while ignoring the original index
    while (leftIndex < left.length && rightIndex < right.length) {
      visualsFunctions.handleHighlighting(
        left[leftIndex].index,
        right[rightIndex].index
      );

      if (left[leftIndex].value < right[rightIndex].value) {
        visualsFunctions.swapDivs(left[leftIndex], lowestIndex);

        // updates div with same value to new index location and iterates
        // lowestIndex by 1 to move on to next index location
        left[leftIndex].index = lowestIndex;
        lowestIndex++;

        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        visualsFunctions.swapDivs(right[rightIndex], lowestIndex);

        right[rightIndex].index = lowestIndex;
        lowestIndex++;

        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
      }
    } // end of while

    let endArray = resultArray
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));

    // this is needed because at the end of the merge, it concats the two arrays
    // sometimes leaving any leftover values unindexed. this makes sure the last two
    // indexes are the highest 2 in the current range
    if (endArray.length > 1) {
      visualsFunctions.swapDivs(
        endArray[endArray.length - 2],
        highestIndex - 1
      );

      visualsFunctions.swapDivs(endArray[endArray.length - 1], highestIndex);

      endArray[endArray.length - 2].index = highestIndex - 1;
      endArray[endArray.length - 1].index = highestIndex;
    }

    console.log(endArray);

    return endArray;
  }

  return {
    preMerge,
    mergeSort,
  };
})();

export { sortFunctions };
