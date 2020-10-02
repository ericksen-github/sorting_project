import { quickVisuals } from "./quickVisuals";
import { disableButtons } from "../disableButtons";
const quickSort = (() => {
  const preQuick = (newArray) => {
    quickVisuals.resetTimeTracker();
    quickSort(newArray);
    quickVisuals.handleEnd(newArray.length);
    disableButtons(quickVisuals.grabTimerValue());
  };

  const quickSort = (unsortedArray, comparator = defaultComparator) => {
    // Create a sortable array to return.
    const sortedArray = [...unsortedArray];

    // Recursively sort sub-arrays.
    const recursiveSort = (start, end) => {
      // If this sub-array is empty, it's sorted.
      if (end - start < 1) {
        return;
      }

      const pivotValue = sortedArray[end];
      let splitIndex = start;
      for (let i = start; i < end; i++) {
        quickVisuals.handleVisuals("red", i, end);
        const sort = comparator(sortedArray[i], pivotValue);

        quickVisuals.handleVisuals("blue", i, end);

        // This value is less than the pivot value.
        if (sort === -1) {
          // If the element just to the right of the split index,
          //   isn't this element, swap them.
          if (splitIndex !== i) {
            const temp = sortedArray[splitIndex];
            sortedArray[splitIndex] = sortedArray[i];
            sortedArray[i] = temp;
            quickVisuals.handleVisuals("green", i, splitIndex);
            quickVisuals.handleVisuals(
              "swapDiv",
              i,
              splitIndex,
              sortedArray[i],
              sortedArray[splitIndex]
            );
            quickVisuals.handleVisuals("blue", i, splitIndex);
          }

          // Move the split index to the right by one,
          //   denoting an increase in the less-than sub-array size.
          splitIndex++;
        }

        // Leave values that are greater than or equal to
        //   the pivot value where they are.
      }

      // Move the pivot value to between the split.
      sortedArray[end] = sortedArray[splitIndex];
      sortedArray[splitIndex] = pivotValue;

      quickVisuals.handleVisuals("green", end, splitIndex);
      quickVisuals.handleVisuals(
        "swapDiv",
        end,
        splitIndex,
        sortedArray[end],
        sortedArray[splitIndex]
      );

      quickVisuals.handleVisuals("blue", end, splitIndex);

      // Recursively sort the less-than and greater-than arrays.
      recursiveSort(start, splitIndex - 1);
      recursiveSort(splitIndex + 1, end);
    };

    // Sort the entire array.
    recursiveSort(0, unsortedArray.length - 1);
    return sortedArray;
  };

  const defaultComparator = (a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  };

  return {
    preQuick,
  };
})();

export { quickSort };
