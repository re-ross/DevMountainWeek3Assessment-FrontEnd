console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("Submitted successfully!");
}

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);

const alertUser = () => {
  alert("Lookin' good today ;)");
};
let catPhoto = document.querySelector("img");

catPhoto.addEventListener("mouseover", function () {
  alertUser();
});
