import { heapVisuals } from "./heapVisuals";
import { disableButtons } from "../disableButtons";

const heapSort = (() => {
  const preHeap = (newArray) => {
    heapVisuals.resetTimeTracker();
    sort(newArray);
    heapVisuals.handleEnd(newArray.length);
    disableButtons(heapVisuals.grabTimerValue());
  };

  function sort(array) {
    // Build our max heap.
    buildMaxHeap(array);

    // Find last element.
    let lastElement = array.length - 1;

    // Continue heap sorting until we have
    // just one element left in the array.
    while (lastElement > 0) {
      swap(array, 0, lastElement);

      heapify(array, 0, lastElement);

      lastElement -= 1;
    }
  }

  function buildMaxHeap(array) {
    let i;
    i = array.length / 2 - 1;
    i = Math.floor(i);

    // Build a max heap out of
    // all array elements passed in.
    while (i >= 0) {
      heapify(array, i, array.length);
      i -= 1;
    }
  }

  function heapify(heap, i, max) {
    let index, leftChild, rightChild;

    while (i < max) {
      index = i;

      leftChild = 2 * i + 1;
      rightChild = leftChild + 1;

      if (leftChild < max && heap[leftChild] > heap[index]) {
        heapVisuals.handleVisuals("red", leftChild, index);
        heapVisuals.handleVisuals("blue", leftChild, index);
        index = leftChild;
      }

      if (rightChild < max && heap[rightChild] > heap[index]) {
        heapVisuals.handleVisuals("red", rightChild, index);
        heapVisuals.handleVisuals("blue", rightChild, index);
        index = rightChild;
      }

      if (index == i) {
        return;
      }

      swap(heap, i, index);

      i = index;
    }
  }

  function swap(array, firstIndex, lastIndex) {
    const tmp = array[firstIndex];

    // Swap first and last items in the array.
    array[firstIndex] = array[lastIndex];
    array[lastIndex] = tmp;

    goRedGreenSwapBlue(
      firstIndex,
      lastIndex,
      array[firstIndex],
      array[lastIndex]
    );
  }

  const goRedGreenSwapBlue = (firstIndex, lastIndex, vOne, vTwo) => {
    heapVisuals.handleVisuals("red", firstIndex, lastIndex);
    heapVisuals.handleVisuals("green", firstIndex, lastIndex);
    heapVisuals.handleVisuals("swapDiv", firstIndex, lastIndex, vOne, vTwo);

    heapVisuals.handleVisuals("blue", firstIndex, lastIndex);
  };

  return {
    preHeap,
  };
})();

export { heapSort };
