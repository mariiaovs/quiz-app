const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target));

  const newCard = document.createElement("section");
  newCard.classList.add("card");
  newCard.innerHTML = `<h2 class="card_title"></h2>
  <button aria-label="bookmark" class="button bookmark" data-js="bookmark">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="35"
      height="35"
    >
      <polygon
        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      />
    </svg>
  </button>
  <p class="question"></p>
  <ul class="card_answers">
    <li class="card_answer button"></li>
    <li class="card_answer button"></li>
    <li class="card_answer button"></li>
    <li class="card_answer button"></li>
  </ul>
  <button class="card_button button" data-js="show-answer">
    Show answer
  </button>
  <p class="answer" hidden data-js="answer-text"></p>
  <ul class="card_tags">
    <li aria-label="tee hashtag"></li>
    <li aria-label="china hashtag"></li>
  </ul>`;

  main.append(newCard);
  event.target.reset();
  event.target.elements.question.focus();
});
