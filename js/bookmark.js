import { cards } from "../js/state.js";
import createCard from "./createCard.js";

let currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") document.body.setAttribute("data-theme", "dark");

const main = document.querySelector('[data-js="cards"]');

let cardsList = [];

if (
  localStorage.getItem("cards") === "undefined" ||
  !localStorage.getItem("cards")
)
  cardsList = cards;
else cardsList = JSON.parse(localStorage.getItem("cards"));

const filteredCardsList = cardsList.filter((card) => card.isBookmarked);

filteredCardsList.forEach((card) => {
  main.append(createCard(card, cardsList));
});
