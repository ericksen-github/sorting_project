import { generateArrayFunctions, newArray } from "./modules/generateArray";
import { mergeSort } from "./modules/mergeSort/mergeSort";
import { bubbleSort } from "./modules/bubbleSort/bubbleSort";
import { quickSort } from "./modules/quickSort/quickSort";
import { heapSort } from "./modules/heapSort/heapSort";
import { createTutorialCard } from "./modules/tutorial";

let randomArrayChecker;

document.getElementById("createNewArray").addEventListener("click", () => {
  generateArrayFunctions.clearBars();
  generateArrayFunctions.generateArray();
  randomArrayChecker = true;
});

document.getElementById("mergeSort").addEventListener("click", () => {
  checkArray();
  mergeSort.preMerge(newArray);
  randomArrayChecker = false;
});

document.getElementById("bubbleSort").addEventListener("click", () => {
  checkArray();
  bubbleSort.preBubble(newArray);
  randomArrayChecker = false;
});

document.getElementById("quickSort").addEventListener("click", () => {
  checkArray();
  quickSort.preQuick(newArray);
  randomArrayChecker = false;
});

document.getElementById("heapSort").addEventListener("click", () => {
  checkArray();
  heapSort.preHeap(newArray);
  randomArrayChecker = false;
});

document.getElementById("tutorial").addEventListener("click", () => {
  createTutorialCard();
});

generateArrayFunctions.generateArray(); // creates initial array
randomArrayChecker = true;

// creates new array if a sort has occured and user presses a sort button again
const checkArray = () => {
  if (randomArrayChecker == false) {
    generateArrayFunctions.clearBars();
    generateArrayFunctions.generateArray();
  }
};
