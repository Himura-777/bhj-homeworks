const reveal = document.querySelector(".reveal");

function isVisible(e) {
  const { top, bottom } = e.getBoundingClientRect();

  if (bottom > 0 && top < window.innerHeight) {
    e.classList.add("reveal_active");
  } else {
    e.classList.remove("reveal_active");
  }
}

isVisible(reveal);

window.addEventListener("scroll", () => isVisible(reveal));
