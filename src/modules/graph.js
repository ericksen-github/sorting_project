import { onLoadData, onLoadOptions } from "./onLoadData";

const ctx = document.getElementById("myChart").getContext("2d");
var barChart = new Chart(ctx, {
  type: "bar",
  data: onLoadData,
  options: onLoadOptions,
});

export { barChart };
