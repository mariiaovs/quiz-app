import { cards } from "../js/state.js";
import createCard from "./createCard.js";

let currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") document.body.setAttribute("data-theme", "dark");

const main = document.querySelector('[data-js="cards"]');

//console.log(localStorage.getItem("cards"));

let cardsList =
  localStorage.getItem("cards") == true
    ? JSON.parse(localStorage.getItem("cards"))
    : cards;

/* console.log(cardsList);
if (!cardsList) cardsList = cards; */

cardsList.forEach((card) => {
  main.append(createCard(card, cardsList));
});
