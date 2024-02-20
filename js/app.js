let currentTheme = localStorage.getItem("theme") || "light";

if (currentTheme === "dark") document.body.setAttribute("data-theme", "dark");

const bookmarkButton = document.querySelector('[data-js="bookmark"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("clicked");
});

const showAnswerButton = document.querySelector('[data-js="show-answer"]');
const answerText = document.querySelector('[data-js="answer-text"]');
console.log(answerText);

let answerIsShown = false;

showAnswerButton.addEventListener("click", () => {
  if (answerIsShown) {
    showAnswerButton.textContent = "Show answer";
    answerText.setAttribute("hidden", "");
  } else {
    showAnswerButton.textContent = "Hide answer";
    answerText.removeAttribute("hidden");
  }
  answerIsShown = !answerIsShown;
});
