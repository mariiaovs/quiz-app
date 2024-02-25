import { cards } from "../js/state.js";
import createCard from "./createCard.js";

let currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") document.body.setAttribute("data-theme", "dark");

const main = document.querySelector('[data-js="cards"]');

let cardsList = JSON.parse(localStorage.getItem("cards"));
if (!cardsList) cardsList = cards;

console.log(cardsList);

cardsList
  .filter((card) => card.isBookmarked)
  .forEach((card) => {
    main.append(createCard(card));
  });
