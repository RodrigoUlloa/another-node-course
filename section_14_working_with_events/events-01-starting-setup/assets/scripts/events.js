const button = document.querySelector("button");
// button.onclick = function() {
//
// };

const buttonClickHandler = () => {
  alert("Button was clicked!");
};

const antoherButtonClickHandler = () => {
  console.log("This was clicked");
};
//
// button.onclick = buttonClickHandler;
// button.onclick = antoherButtonClickHandler;

const boundFn = buttonClickHandler.bind(this);

button.addEventListener("click", buttonClickHandler.bind(this));

setTimeout(() => {
  button.removeEventListener("click", buttonClickHandler.bind(this));
}, 2000);
