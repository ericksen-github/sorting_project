import { generateArrayFunctions, newArray } from "./modules/generateArray";
import { sortFunctions } from "./modules/sortArray";
import { bubbleSort } from "./modules/bubbleSort/bubbleSort";

document.getElementById("createNewArray").addEventListener("click", () => {
  generateArrayFunctions.clearBars();
  generateArrayFunctions.generateArray();
});

document.getElementById("mergeSort").addEventListener("click", () => {
  sortFunctions.preMerge(newArray);
});

document.getElementById("bubbleSort").addEventListener("click", () => {
  bubbleSort.preBubble(newArray);
});

generateArrayFunctions.generateArray();
