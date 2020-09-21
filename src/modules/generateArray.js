import { barChart } from "./graph";

let newArray;

const generateArray = () => {
  const length = Math.floor(Math.random() * 40) + 100;
  const maxNum = Math.floor(Math.random() * length);

  newArray = Array.from({ length: length }, () =>
    Math.floor(Math.random() * maxNum)
  );
  pushOneData();
};

const pushOneData = () => {
  let dataOne = [];
  let xLabels = [];

  newArray.forEach((ele) => {
    dataOne.push(ele);
    xLabels.push(ele);
  });

  let labelOne = "Random Number Array";
  let borderColorOne = "rgb(106, 212, 134)";

  chartOneDataset(dataOne, xLabels, labelOne, borderColorOne);
};

const chartOneDataset = (dataOne, xLabels, labelOne, borderColorOne) => {
  const oneDataSet = {
    datasets: [
      {
        data: dataOne,
        label: labelOne,
        borderColor: borderColorOne,
      },
    ],
    labels: xLabels,
  };

  const oneAxis = {
    scales: {
      xAxes: [
        {
          ticks: {
            display: false,
          },
        },
      ],
    },
  };

  barChart.data = oneDataSet;
  barChart.options = oneAxis;
};

export { generateArray, newArray };
