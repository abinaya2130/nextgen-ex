const themeToggle = document.getElementById("themeToggle");
const demoButton = document.getElementById("demoButton");
const toast = document.getElementById("toast");

document.getElementById("year").textContent = new Date().getFullYear();

let toastTimer;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

// Switch between dark and light themes
themeToggle.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-theme");

  themeToggle.textContent = isLight ? "☾" : "☀";
  themeToggle.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );

  showToast(isLight ? "Light theme activated!" : "Dark theme activated!");
});

// Demonstrate an interactive feature
demoButton.addEventListener("click", () => {
  showToast("Welcome to NextGen UI! Your interactive journey starts here. ✨");
});

// Give feedback when a feature link is selected
document.querySelectorAll(".feature-link").forEach((link) => {
  link.addEventListener("click", () => {
    showToast("Explore how NextGen UI brings ideas to life!");
  });
});
