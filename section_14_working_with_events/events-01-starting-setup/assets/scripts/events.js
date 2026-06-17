const buttons = document.querySelectorAll("button");
// button.onclick = function() {
//
// };

const buttonClickHandler = (event) => {
  event.target.disabled = true;
  console.log(event);
};

const antoherButtonClickHandler = () => {
  console.log("This was clicked");
};
//
// button.onclick = buttonClickHandler;
// button.onclick = antoherButtonClickHandler;

const boundFn = buttonClickHandler.bind(this);

//button.addEventListener("click", buttonClickHandler);

// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

buttons.forEach((btn) => {
  btn.addEventListener("click", buttonClickHandler);
});
