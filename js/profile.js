const checkbox = document.querySelector('[data-js="checkbox"]');

let currentTheme = localStorage.getItem("theme") || "light";

if (currentTheme === "dark") {
  checkbox.setAttribute("checked", "");
  document.body.setAttribute("data-theme", "dark");
} else checkbox.checked = "false";

checkbox.addEventListener("change", toggleTheme, false);

function toggleTheme(event) {
  if (event.target.checked) {
    document.body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.body.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  }
}
