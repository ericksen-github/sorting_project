import { generateArrayFunctions, newArray } from "./modules/generateArray";
import { mergeSort } from "./modules/mergeSort/mergeSort";
import { bubbleSort } from "./modules/bubbleSort/bubbleSort";
import { quickSort } from "./modules/quickSort/quickSort";
import { heapSort } from "./modules/heapSort/heapSort";
import { createTutorialCard } from "./modules/tutorial";

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

document.getElementById("quickSort").addEventListener("click", () => {
  quickSort.preQuick(newArray);
});

document.getElementById("heapSort").addEventListener("click", () => {
  heapSort.preHeap(newArray);
});

document.getElementById("tutorial").addEventListener("click", () => {
  createTutorialCard();
});

generateArrayFunctions.generateArray();
