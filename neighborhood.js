let recButton = document.querySelector("#randomRec");

recButton.addEventListener("click", () => {
  const restArray = [
    "Thai Thai",
    `Harvey B's`,
    `Jimmy's Food Store`,
    "Aca Las Tortas",
    "Cook Your Own Food",
  ];
  let rand = restArray[(Math.random() * restArray.length) | 0];
  console.log(rand);
  alert(rand);
});
