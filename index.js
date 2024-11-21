// Scroll back to top button

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

//Page fades in on reload
document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".content");
  content.classList.add("fade-in");
});

function adjustProjectImages() {
  const screenWidth = window.innerWidth;

  // Select all project cards
  const projectCards = document.querySelectorAll(".projectCard");

  projectCards.forEach((card) => {
    const resizeDiv = card.querySelector(".resize");
    const projImgDiv = card.querySelector(".projImg.hover:not(.resize)");

    if (screenWidth <= 480) {
      // Move classes and ID to resizeDiv if not already applied
      if (resizeDiv && projImgDiv && !resizeDiv.classList.contains("projImg")) {
        // Add classes and ID to resizeDiv
        resizeDiv.classList.add("projImg", "hover");
        resizeDiv.id = projImgDiv.id;

        // Remove classes and ID from projImgDiv
        projImgDiv.classList.remove("projImg", "hover");
        projImgDiv.removeAttribute("id");
      }
    } else {
      // Revert classes and ID back to projImgDiv
      if (
        resizeDiv &&
        projImgDiv &&
        !projImgDiv.classList.contains("projImg")
      ) {
        // Add classes and ID back to projImgDiv
        projImgDiv.classList.add("projImg", "hover");
        projImgDiv.id = resizeDiv.id;

        // Remove classes and ID from resizeDiv
        resizeDiv.classList.remove("projImg", "hover");
        resizeDiv.removeAttribute("id");
      }
    }
  });
}

// Add listener to track screen resize
function trackScreenResize() {
  let lastScreenWidth = window.innerWidth;

  window.addEventListener("resize", () => {
    const currentScreenWidth = window.innerWidth;

    // Only adjust when crossing the 768px threshold
    if (
      (lastScreenWidth <= 768 && currentScreenWidth > 768) ||
      (lastScreenWidth > 768 && currentScreenWidth <= 768)
    ) {
      adjustProjectImages();
    }

    lastScreenWidth = currentScreenWidth;
  });
}

// Initialize adjustments on page load
window.addEventListener("load", () => {
  adjustProjectImages();
  trackScreenResize();
});

// //Form validation for when i use an actual form thing

// function validateForm() {
//   let validForm = true;
//   //values
//   let nameVal = document.getElementById("name").value;
//   let emailVal = document.getElementById("email").value;
//   let msgVal = document.getElementById("msg").value;

//   //empty name
//   if (nameVal == "") {
//     document.getElementById("nameError").innerText =
//       "Please fill out this field.";
//     validForm = false;
//   } else {
//     document.getElementById("nameError").innerText = " ";
//   }

//   //invalid email
//   let validEmail = /^([a-zA-Z0-9!#$%.]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,3})$/;
//   if (!validEmail.test(emailVal)) {
//     document.getElementById("emailError").innerText =
//       "Your email format is incorrect. Please try again.";
//     validForm = false;
//   } else if (emailVal == " ") {
//     document.getElementById("emailError").innerText =
//       "Please fill out this field.";
//     validForm = false;
//   } else {
//     document.getElementById("emailError").innerText = " ";
//   }

//   if (msgVal == "") {
//     document.getElementById("msgError").innerText =
//       "Please fill out this field.";
//     validForm = false;
//   } else {
//     document.getElementById("msgError").innerText = " ";
//   }
// }

// document
//   .getElementsByTagName("form")[0]
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); //prevents form default
//     validateForm();
//   });
