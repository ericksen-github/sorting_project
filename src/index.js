import { generateArrayFunctions, newArray } from "./modules/generateArray";
import { mergeSort } from "./modules/mergeSort/mergeSort";
import { bubbleSort } from "./modules/bubbleSort/bubbleSort";

document.getElementById("createNewArray").addEventListener("click", () => {
  generateArrayFunctions.clearBars();
  generateArrayFunctions.generateArray();
});

document.getElementById("mergeSort").addEventListener("click", () => {
  mergeSort.preMerge(newArray);
});

document.getElementById("bubbleSort").addEventListener("click", () => {
  bubbleSort.preBubble(newArray);
});

generateArrayFunctions.generateArray();
