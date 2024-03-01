import { cards } from "../js/state.js";
import createCard from "./createCard.js";

let currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") document.body.setAttribute("data-theme", "dark");

const main = document.querySelector('[data-js="cards"]');

//console.log(localStorage.getItem("cards"));

/* let cardsList = localStorage.getItem("cards");

if (cardsList === "undefined") {
  cardsList = cards;
} else {
  cardsList = JSON.parse(cardsList);
} */

let cardsList =
  localStorage.getItem("cards") === "undefined"
    ? cards
    : JSON.parse(localStorage.getItem("cards"));

//console.log(localStorage.getItem("cards"));
//console.log(cardsList);

cardsList.forEach((card) => {
  main.append(createCard(card, cardsList));
});
