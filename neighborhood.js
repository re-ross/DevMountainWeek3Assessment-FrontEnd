let recButton = document.querySelector("#randomRec");

recButton.addEventListener("click", () => {
  const restArray = [
    "Thai Thai",
    `Harvey B's`,
    `Jimmy's Food Store`,
    "Aca Las Tortas",
    `Lucky's Hot Chicken`,
    "your own kitchen",
  ];
  let rand = restArray[(Math.random() * restArray.length) | 0];
  console.log(rand);
  alert(`You should eat at ` + rand + `!`);
});
