let newArray;

const generateArray = () => {
  const length = Math.floor(Math.random() * 40) + 100;
  const maxNum = Math.floor(Math.random() * length);

  let newArray = Array.from({ length: length }, () =>
    Math.floor(Math.random() * maxNum)
  );

  console.log(newArray);
};

export { generateArray, newArray };
