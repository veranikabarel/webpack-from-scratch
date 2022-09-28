import generateJoke from "./generateJoke";
import "./styles/main.scss";

import peter from "./assets/peter.png";

const peterImg = document.getElementById("peterImg");
peterImg.src = peter;

const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();
