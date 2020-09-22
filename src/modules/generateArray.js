// import { barChart } from "./graph";

let newArray;

const generateArray = () => {
  const minNum = 5;
  const maxNum = 500;

  newArray = Array.from({ length: 100 }, () =>
    Math.floor(Math.random() * (maxNum - minNum + 1) + minNum)
  );
  createBars(newArray);
};

const createBars = (newArray) => {
  const barWrapper = document.getElementById("barWrapper");
  for (let i = 0; i < newArray.length; i++) {
    const newBar = document.createElement("div");
    newBar.classList.add("bar");
    newBar.style.height = `${newArray[i]}px`;
    barWrapper.appendChild(newBar);
  }
};

// const pushOneData = () => {
//   let dataOne = [];
//   let xLabels = [];

//   newArray.forEach((ele) => {
//     dataOne.push(ele);
//     xLabels.push(ele);
//   });

//   let labelOne = "Random Number Array";
//   let borderColorOne = "rgb(106, 212, 134)";

//   chartOneDataset(dataOne, xLabels, labelOne, borderColorOne);
// };

// const chartOneDataset = (dataOne, xLabels, labelOne, borderColorOne) => {
//   const oneDataSet = {
//     datasets: [
//       {
//         data: dataOne,
//         label: labelOne,
//         borderColor: borderColorOne,
//       },
//     ],
//     labels: xLabels,
//   };

//   const oneAxis = {
//     scales: {
//       xAxes: [
//         {
//           ticks: {
//             display: false,
//           },
//         },
//       ],
//     },
//   };

//   barChart.data = oneDataSet;
//   barChart.options = oneAxis;
// };

export { generateArray, newArray };
