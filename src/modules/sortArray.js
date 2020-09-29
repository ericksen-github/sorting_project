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

    // left[0] is always lowest index in range
    let lowestIndex = left[0].index;

    // We will concatenate values into the resultArray in order
    // compares the value of each while ignoring the original location index
    while (0 < left.length && 0 < right.length) {
      visuals.runAnimations("red", left[0], right[0], lowestIndex);

      if (left[0].value < right[0].value) {
        visuals.runAnimations("blue", left[0], right[0], lowestIndex);

        // left[0] is already at lowest index, still iterate for right side
        lowestIndex++;
        resultArray.push(left[0]);
        left.shift(); // removes value that was pushed to results
      } else {
        visuals.runAnimations("blue", left[0], right[0], lowestIndex);

        // updates div with same value to new index location and iterates
        // lowestIndex by 1 to move on to next index location
        right[0].index = lowestIndex;
        lowestIndex++;

        resultArray.push(right[0]);

        let shiftArray = [];
        shiftArray.push({ value: right[0].value, index: right[0].index });
        right.shift(); // removes value that was pushed to results

        // create array of objs to send to shiftDivs to move the entire range of
        // divs/values that werent pushed

        for (let i = 0; i < left.length; i++) {
          left[i].index = left[i].index + 1;
          const ele = { value: left[i].value, index: left[i].index };
          shiftArray.push(ele);
        }
        visuals.shiftDivs(shiftArray);
      }
    } // end of while

    // concat returns an array, so its result is assigned to endArray
    let endArray = resultArray.concat(left).concat(right);

    return endArray;
  }

  return {
    preMerge,
    mergeSort,
  };
})();

export { sortFunctions };
