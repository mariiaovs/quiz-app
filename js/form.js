import createCard from "./createCard.js";
import { cards } from "./state.js";

let currentTheme = localStorage.getItem("theme") || "light";

if (currentTheme === "dark") document.body.setAttribute("data-theme", "dark");

const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');
const leftCharactersQuestion = document.querySelector(
  '[data-js="question-characters"]'
);
const leftCharactersAnswer = document.querySelector(
  '[data-js="answer-characters"]'
);
const textareaQuestion = document.querySelector('[data-js="question"]');
const textareaAnswer = document.querySelector('[data-js="answer"]');

showLeftCharacters(textareaQuestion, leftCharactersQuestion);
showLeftCharacters(textareaAnswer, leftCharactersAnswer);

function showLeftCharacters(textarea, leftCharacters) {
  textarea.addEventListener("input", () => {
    leftCharacters.textContent = 150 - textarea.value.length;
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target));

  let tags = data.tags.split(",");
  tags.map((tag) => tag.trim());

  let newCard = {
    id: cards.length + 1,
    question: data.question,
    answers: [data.answer, "Orangensaft", "Schwarzer Tee", "Cola"], // mix answers?
    rightAnswer: 0,
    tags,
    isBookmarked: false,
  };

  cards.push(newCard);

  main.append(createCard(newCard));
  event.target.reset();
  event.target.elements.question.focus();
});
