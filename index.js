window.onscroll = function () {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (document.documentElement.scrollTop > 100) {
    // Adjust scroll position as needed
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
