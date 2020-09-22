import { clearBars, generateArray } from "./modules/generateArray";

generateArray();

document.getElementById("createNewArray").addEventListener("click", () => {
  clearBars();
  generateArray();
});
