let currentTheme = localStorage.getItem("theme") || "light";

if (currentTheme === "dark") document.body.setAttribute("data-theme", "dark");
