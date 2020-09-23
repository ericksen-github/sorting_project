const sortFunctions = (() => {
  // Merge Sort Algorithm from https://medium.com/javascript-in-plain-english/javascript-merge-sort-3205891ac060
  function mergeSort(unsortedArray) {
    // No need to sort the array if the array only has one element or empty
    if (unsortedArray.length <= 1) {
      return unsortedArray;
    }

    const middle = Math.floor(unsortedArray.length / 2);

    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    let indexList = [];

    for (let i = arrayIndexes.length, j = 0; j < right.length; j++, i--) {
      indexList.unshift[i];
    }

    return merge(mergeSort(left), mergeSort(right, indexLocation));
  }

  // Merge the two arrays: left and right
  function merge(left, right) {
    let resultArray = [],
      leftIndex = 0,
      rightIndex = 0;

    // We will concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; // move left array cursor
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++; // move right array cursor
      }
    }
    console.log(left);
    console.log(right);
    console.log(leftIndex + " left");
    console.log(rightIndex + " right");

    return resultArray
      .concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));
  }

  return {
    mergeSort,
  };
})();

export { sortFunctions };
