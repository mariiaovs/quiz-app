import { cards } from "../js/cards.js";

let currentTheme = localStorage.getItem("theme") || "light";

if (currentTheme === "dark") document.body.setAttribute("data-theme", "dark");

const main = document.querySelector('[data-js="cards"]');

cards.forEach((card) => {
  const cardElement = document.createElement("main");
  cardElement.classList.add("card");

  const cardTitleElement = document.createElement("h2");
  cardTitleElement.classList.add("card_title");
  cardTitleElement.textContent = `Question ${card.id}`;

  const bookmarkButton = document.createElement("button");
  bookmarkButton.className = "button bookmark";
  bookmarkButton.setAttribute("aria-label", "bookmark");
  bookmarkButton.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="2rem"
  height="2rem"
>
  <polygon
    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
  />
</svg>`;

  bookmarkButton.addEventListener("click", () => {
    card.isBookmarked = !card.isBookmarked;
    bookmarkButton.classList.toggle("clicked");
  });

  const cardQuestion = document.createElement("p");
  cardQuestion.classList.add("question");
  cardQuestion.textContent = card.question;

  const showAnswerButton = document.createElement("button");
  showAnswerButton.className = "card_button button";
  showAnswerButton.textContent = "Show answer";

  const cardAnswer = document.createElement("p");
  cardAnswer.classList.add("answer");
  cardAnswer.setAttribute("hidden", "");
  cardAnswer.textContent = card.answers[card.rightAnswer];

  showAnswerButton.addEventListener("click", () => {
    if (showAnswerButton.textContent.includes("Hide")) {
      showAnswerButton.textContent = "Show answer";
      cardAnswer.setAttribute("hidden", "");
    } else {
      showAnswerButton.textContent = "Hide answer";
      cardAnswer.removeAttribute("hidden");
    }
  });

  const cardTagsList = document.createElement("ul");
  cardTagsList.classList.add("card_tags");
  card.tags.forEach((tag) => {
    const cardTag = document.createElement("li");
    cardTag.setAttribute("aria-label", `${tag}-hashtag`);
    cardTag.textContent = `#${tag}`;
    cardTagsList.append(cardTag);
  });

  cardElement.append(
    cardTitleElement,
    bookmarkButton,
    cardQuestion,
    showAnswerButton,
    cardAnswer,
    cardTagsList
  );
  main.append(cardElement);
});

const showAnswerButton = document.querySelector('[data-js="show-answer"]');
const answerText = document.querySelector('[data-js="answer-text"]');
console.log(answerText);

let answerIsShown = false;
