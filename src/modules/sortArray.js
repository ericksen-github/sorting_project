import { visualsFunctions } from "./visualsFunctions";

const timeController = 10; // 10 recommended
let timerTracker = 1;

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
      k = 0, // leftIndex
      j = 0; // rightIndex

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
    while (k < left.length && j < right.length) {
      handleAllAnimations("red", left[k], right[j], lowestIndex);

      if (left[k].value < right[j].value) {
        handleAllAnimations("divSize", left[k], right[j], lowestIndex);
        handleAllAnimations("blue", left[k], right[j], lowestIndex);

        // updates div with same value to new index location and iterates
        // lowestIndex by 1 to move on to next index location
        left[k].index = lowestIndex;
        lowestIndex++;

        resultArray.push(left[k]);

        k++; // move left array cursor
      } else {
        handleAllAnimations("divSize", right[j], left[k], lowestIndex);
        handleAllAnimations("blue", left[k], right[j], lowestIndex);

        right[j].index = lowestIndex;
        lowestIndex++;

        resultArray.push(right[j]);
        j++; // move right array cursor
      }
    } // end of while

    let leftEnd = left.slice(k);
    let rightEnd = right.slice(j);

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
      // send current[i] twice to account for second required input for function
      handleAllAnimations("divSize", current[i], current[i], lowestIndex);

      current[i].index = lowestIndex;
      lowestIndex++;
    }

    return current;
  };

  const handleAllAnimations = (type, first, second, lowestIndex) => {
    const barWrapper = document.getElementById("barWrapper");

    const oneBar = barWrapper.childNodes[first.index];
    const twoBar = barWrapper.childNodes[second.index];

    const height = first.value;

    setTimeout(() => {
      if (type == "red") {
        oneBar.style.backgroundColor = "red";
        twoBar.style.backgroundColor = "red";
      } else if (type == "blue") {
        oneBar.style.backgroundColor = "blue";
        twoBar.style.backgroundColor = "blue";
      } else if (type == "divSize") {
        barWrapper.childNodes[lowestIndex].style.height = `${height}px`;
      }
    }, timeController * timerTracker);
    timerTracker++;
  };

  return {
    preMerge,
    mergeSort,
  };
})();

export { sortFunctions };
