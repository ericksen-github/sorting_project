import { visualsFunctions } from "./handleVisuals";
let counter = 0;

const sortFunctions = (() => {
  // takes generated array and pushes each value and the index of its
  // location in the original array into unsortedArray
  const preMerge = (newArray) => {
    let unsortedArray = [];

    // i comes out as array on index, needs [0] to grab just num
    for (let i = 0; i < newArray.length; i++) {
      unsortedArray.push({ value: newArray[i], index: [i][0] });
    }

    console.log(mergeSort(unsortedArray), " end preMerge");
    console.log(counter, " total counts");
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

    // We will concatenate values into the resultArray in order
    // compares the value of each while ignoring the original index
    while (leftIndex < left.length && rightIndex < right.length) {
      visualsFunctions.handleVisuals(left[leftIndex], right[rightIndex]);
      counter++;

      if (left[leftIndex].value < right[rightIndex].value) {
        // swaps object index values to match order of values
        if (left[leftIndex].index > right[rightIndex].index) {
          console.log(left[leftIndex], " left before swap if");
          console.log(right[rightIndex], " right before swap if");

          let swapArray = visualsFunctions.swapDivs(
            left[leftIndex],
            right[rightIndex]
          );

          left[leftIndex] = swapArray[0];
          right[rightIndex] = swapArray[1];

          console.log(left[leftIndex], " left after swap if");
          console.log(right[rightIndex], " right after swap if");
        }

        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        // if values are equal, does not swap indexes
        if (left[leftIndex].value != right[rightIndex].value) {
          console.log(left[leftIndex], " left before swap else");
          console.log(right[rightIndex], " right before swap else");

          let swapArray = visualsFunctions.swapDivs(
            left[leftIndex],
            right[rightIndex]
          );

          left[leftIndex] = swapArray[0];
          right[rightIndex] = swapArray[1];

          console.log(left[leftIndex], " left after swap else");
          console.log(right[rightIndex], " right after swap else");
        }

        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
      }
    }

    console.log(
      JSON.stringify(
        resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex))
      ),
      " results array"
    );

    return resultArray
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));
  }

  return {
    preMerge,
    mergeSort,
  };
})();

export { sortFunctions };