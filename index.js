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
