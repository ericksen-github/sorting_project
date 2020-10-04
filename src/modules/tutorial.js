const createTutorialCard = () => {
  const body = document.getElementById("body");

  const card = document.createElement("div");
  const container = document.createElement("div");
  const h = document.createElement("h2");
  const p = document.createElement("p");
  const button = document.createElement("div");

  card.id = "card";
  container.id = "innerCard";

  h.innerHTML = "How it works";
  container.appendChild(h);

  p.innerHTML =
    "This project allows you to visualize how different sorting methods";

  p.innerHTML +=
    " move through data while sorting. Click on the sort method you";
  p.innerHTML += ' want to try out. Click the "Create New Array" button to ';
  p.innerHTML += "generate a new, random array of numbers. Red highlighting ";
  p.innerHTML += "indicates a comparison. Green indicates a change in value. ";
  p.innerHTML += "Check out how each sort compares to the others.";

  container.appendChild(p);

  button.id = "closeButton";
  button.innerHTML = "Close";
  button.addEventListener("click", () => {
    document.getElementById("card").remove();
    document.getElementById("overlay").style.display = "none";
  });

  container.appendChild(button);
  card.appendChild(container);
  body.appendChild(card);
  document.getElementById("overlay").style.display = "block";
};

export { createTutorialCard };
