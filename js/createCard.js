export default function createCard(card, cardsList) {
  const cardElement = document.createElement("main");
  cardElement.classList.add("card");

  const cardTitleElement = document.createElement("h2");
  cardTitleElement.classList.add("card_title");
  cardTitleElement.textContent = `Question ${card.id}`;

  const bookmarkButton = document.createElement("button");
  bookmarkButton.className = `button bookmark ${
    card.isBookmarked ? "clicked" : ""
  }`;
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
    //console.log(cardsList);
    localStorage.setItem("cards", JSON.stringify(cardsList));
  });

  const cardQuestion = document.createElement("p");
  cardQuestion.classList.add("question");
  cardQuestion.textContent = card.question;

  //add answer - buttons

  const cardAnswersList = document.createElement("li");
  cardAnswersList.className = "card_answers";

  /* card.answers.forEach((answer) => {
    const cardAnswerVariant = document.createElement("button");
    cardAnswerVariant.className = "card_answer button";

    cardAnswerVariant.addEventListener("click", () => {
      cardAnswerVariant.classList.toggle("clicked");
    });

    cardAnswerVariant.textContent = answer;
    cardAnswersList.append(cardAnswerVariant);
  }); */

  const cardAnswerVariant0 = document.createElement("button");
  cardAnswerVariant0.className = "card_answer button";
  cardAnswerVariant0.textContent = card.answers[0];

  const cardAnswerVariant1 = document.createElement("button");
  cardAnswerVariant1.className = "card_answer button";
  cardAnswerVariant1.textContent = card.answers[1];

  const cardAnswerVariant2 = document.createElement("button");
  cardAnswerVariant2.className = "card_answer button";
  cardAnswerVariant2.textContent = card.answers[2];

  const cardAnswerVariant3 = document.createElement("button");
  cardAnswerVariant3.className = "card_answer button";
  cardAnswerVariant3.textContent = card.answers[3];

  cardAnswerVariant0.addEventListener("click", () => {
    cardAnswerVariant0.classList.toggle("clicked");
    cardAnswerVariant1.toggleAttribute("disabled");
    cardAnswerVariant2.toggleAttribute("disabled");
    cardAnswerVariant3.toggleAttribute("disabled");
  });

  cardAnswerVariant1.addEventListener("click", () => {
    cardAnswerVariant1.classList.toggle("clicked");
    cardAnswerVariant0.toggleAttribute("disabled");
    cardAnswerVariant2.toggleAttribute("disabled");
    cardAnswerVariant3.toggleAttribute("disabled");
  });

  cardAnswerVariant2.addEventListener("click", () => {
    cardAnswerVariant2.classList.toggle("clicked");
    cardAnswerVariant1.toggleAttribute("disabled");
    cardAnswerVariant0.toggleAttribute("disabled");
    cardAnswerVariant3.toggleAttribute("disabled");
  });

  cardAnswerVariant3.addEventListener("click", () => {
    cardAnswerVariant3.classList.toggle("clicked");
    cardAnswerVariant1.toggleAttribute("disabled");
    cardAnswerVariant2.toggleAttribute("disabled");
    cardAnswerVariant0.toggleAttribute("disabled");
  });

  cardAnswersList.append(
    cardAnswerVariant0,
    cardAnswerVariant1,
    cardAnswerVariant2,
    cardAnswerVariant3
  );

  // end

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
    cardAnswersList,
    showAnswerButton,
    cardAnswer,
    cardTagsList
  );

  return cardElement;
}
