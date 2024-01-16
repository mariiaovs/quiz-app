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

  const newCard = document.createElement("section");
  newCard.classList.add("card");

  const newCardTitle = document.createElement("h2");
  newCardTitle.classList.add("card_title");
  newCardTitle.textContent = "Question #";

  const newCardBookmark = document.createElement("button");
  newCardBookmark.classList.add("button", "bookmark");
  newCardBookmark.setAttribute("aria-label", "bookmark");
  newCardBookmark.innerHTML = `<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  width="35"
  height="35"
>
  <polygon
    points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
  />
</svg>`;

  newCardBookmark.addEventListener("click", () => {
    newCardBookmark.classList.toggle("clicked");
  });

  const newCardQuestion = document.createElement("p");
  newCardQuestion.classList.add("question");
  newCardQuestion.textContent = data.question;

  const newShowAnswerButton = document.createElement("button");
  newShowAnswerButton.classList.add("card_button", "button");
  newShowAnswerButton.textContent = "Show answer";

  const newCardAnswer = document.createElement("p");
  newCardAnswer.classList.add("answer");
  newCardAnswer.setAttribute("hidden", "");
  newCardAnswer.textContent = data.answer;

  const newCardTags = document.createElement("ul");
  newCardTags.classList.add("card_tags");

  const newCardTag = document.createElement("li");
  newCardTag.setAttribute("aria-label", "tee-hashtag");
  newCardTag.textContent = `#${data.tag}`;

  let answerIsShown = false;

  newShowAnswerButton.addEventListener("click", () => {
    if (answerIsShown) {
      newShowAnswerButton.textContent = "Show answer";
      newCardAnswer.setAttribute("hidden", "");
    } else {
      newShowAnswerButton.textContent = "Hide answer";
      newCardAnswer.removeAttribute("hidden");
    }
    answerIsShown = !answerIsShown;
  });

  newCardTags.append(newCardTag);
  newCard.append(
    newCardTitle,
    newCardBookmark,
    newCardQuestion,
    newShowAnswerButton,
    newCardAnswer,
    newCardTags
  );

  main.append(newCard);
  event.target.reset();
  event.target.elements.question.focus();
});
