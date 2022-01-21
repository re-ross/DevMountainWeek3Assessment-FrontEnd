let recButton = document.querySelector("#randomRec");

recButton.addEventListener("click", () => {
  const restArray = ["Thai Thai", `Harvey B's`, `Jimmy's Food Store`];
  let rand = restArray[(Math.random() * restArray.length) | 0];
  console.log(rand);
  alert(rand);
});
