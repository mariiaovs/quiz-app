import { cards } from "../js/state.js";
import createCard from "./createCard.js";

let currentTheme = localStorage.getItem("theme") || "light";

if (currentTheme === "dark") document.body.setAttribute("data-theme", "dark");

const main = document.querySelector('[data-js="cards"]');

cards.forEach((card) => {
  main.append(createCard(card));
});
