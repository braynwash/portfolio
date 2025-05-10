// scroll back to top
window.onscroll = function () {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.documentElement.scrollTop > 100) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
};

document.getElementById("backToTopBtn").onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

window.addEventListener("load", () => {
  const fade = document.querySelector(".content");
  if (fade) {
    fade.style.opacity = "1";
  }
});
