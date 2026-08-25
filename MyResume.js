const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

const savedTheme = localStorage.getItem("resumeTheme");

if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  themeIcon.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");

  const isLight = document.body.classList.contains("light-mode");

  themeIcon.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("resumeTheme", isLight ? "light" : "dark");
});
