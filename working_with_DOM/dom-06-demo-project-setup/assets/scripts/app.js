const addMovieModal = document.getElementById("add-modal");
//const addMovieModal = document.getElementById('#add-modal');
//const addMovieModal = document.body.children[1];
const startAddMovieBotton = document.querySelector("header button");
//const startAddMovieBotton = document.querySelector("header").lastElementChild;

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
};

startAddMovieBotton.addEventListener("click", toggleMovieModal);
