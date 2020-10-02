import { bubbleVisuals } from "./bubbleVisuals";
import { disableButtons } from "../disableButtons";

const bubbleSort = (() => {
  const preBubble = (unsortedArray) => {
    bubbleVisuals.resetTimeTracker();
    sort(unsortedArray);
    bubbleVisuals.handleEnd(unsortedArray.length);
    disableButtons(bubbleVisuals.grabTimerValue());
  };

  const sort = (unsortedArray) => {
    let len = unsortedArray.length;
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < len; i++) {
        if (unsortedArray[i + 1]) {
          bubbleVisuals.handleVisuals(
            "red",
            unsortedArray[i],
            unsortedArray[i + 1],
            i
          );

          if (unsortedArray[i] > unsortedArray[i + 1]) {
            // swaps the two values
            let tmp = unsortedArray[i];
            unsortedArray[i] = unsortedArray[i + 1];
            unsortedArray[i + 1] = tmp;

            bubbleVisuals.handleVisuals(
              "swapDiv",
              unsortedArray[i],
              unsortedArray[i + 1],
              i
            );
            swapped = true;
          }
          bubbleVisuals.handleVisuals(
            "blue",
            unsortedArray[i],
            unsortedArray[i + 1],
            i
          );
        }
      }
    } while (swapped);
    return unsortedArray;
  };

  return {
    preBubble,
  };
})();

export { bubbleSort };
