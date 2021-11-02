console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("The Forum has been submitted");
}

let form = document.querySelector("form#contact");

form.addEventListener("submit", handleSubmit);

const hoverDuck = document.querySelector("#duck");

hoverDuck.addEventListener("mouseover", () => {
  alert("you look nice");
});
