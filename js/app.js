const bookmarkButton = document.querySelector('[data-js="bookmark"]');

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("clicked");
});
