import { generateArrayFunctions, newArray } from "./modules/generateArray";
import { sortFunctions } from "./modules/sortArray";

document.getElementById("createNewArray").addEventListener("click", () => {
  generateArrayFunctions.clearBars();
  generateArrayFunctions.generateArray();
});

document.getElementById("mergeSort").addEventListener("click", () => {
  sortFunctions.mergeSort(newArray);
});

generateArrayFunctions.generateArray();
