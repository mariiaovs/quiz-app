import createCard from "./createCard.js";
import { cards } from "./state.js";

let currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") document.body.setAttribute("data-theme", "dark");

let cardsList = [];

if (
  localStorage.getItem("cards") === "undefined" ||
  !localStorage.getItem("cards")
)
  cardsList = cards;
else cardsList = JSON.parse(localStorage.getItem("cards"));

const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');
const leftCharactersQuestion = document.querySelector(
  '[data-js="question-characters"]'
);

const leftCharactersAnswers = document.querySelector(
  '[data-js="answers-characters"]'
);

const textareaQuestion = document.querySelector('[data-js="question"]');
const textareaAnswers = document.querySelector('[data-js="answers"]');

showLeftCharacters(textareaQuestion, leftCharactersQuestion, 50);
showLeftCharacters(textareaAnswers, leftCharactersAnswers, 150);

function showLeftCharacters(textarea, leftCharacters, length) {
  textarea.addEventListener("input", () => {
    leftCharacters.textContent = length - textarea.value.length;
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target));
  console.log(data);
  let tags = data.tags.split(",");
  tags.map((tag) => tag.trim());

  let answers = data.answers.split(",");
  answers.map((answer) => answer.trim());

  let newCard = {
    id: cardsList.length + 1,
    question: data.question,
    answers: answers,
    rightAnswer: Number(data.answer),
    tags,
    isBookmarked: false,
    isAnswered: false,
    answeredRight: false,
  };

  cardsList.push(newCard);

  localStorage.setItem("cards", JSON.stringify(cardsList));

  main.append(createCard(newCard, cardsList));
  event.target.reset();
  event.target.elements.question.focus();
});
