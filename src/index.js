import { generateArrayFunctions } from "./modules/generateArray";

document.getElementById("createNewArray").addEventListener("click", () => {
  generateArrayFunctions.clearBars();
  generateArrayFunctions.generateArray();
});

generateArrayFunctions.generateArray();
