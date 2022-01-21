let myFavColor = document.querySelector("#color");
let myFavPlace = document.querySelector("#place");
let myFavRitual = document.querySelector("#ritual");

myFavColor.addEventListener("click", () => {
  alert("My favorite color is Green!");
});

myFavPlace.addEventListener("click", () => {
  alert("My favorite place is Copenhagen, Denmark!");
});

myFavRitual.addEventListener("click", () => {
  alert("My favorite ritual is making a chemex of coffee every morning!");
});
