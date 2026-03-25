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

// fade on load in

window.addEventListener("load", () => {
  const fade = document.querySelector(".content");
  if (fade) {
    fade.style.opacity = "1";
  }
});

// data for the "read more" modal
// 1) lookup table of project HTML

const projectDetails = {
  keurig: `
    <h2>All About my Keurig Mock-Up</h2>
    <p>
      Replicates the Keurig 2023 home & cart pages and utilizes jQuery to simulate basic dynamic e-commerce flow, or adding/deleting items from a cart and a "check out" feature that empties the cart. Users also create accounts through email or Google integration and keep their cart persistent through Firebase Authentication. I sought to challenge myself by buiding a website based off of an existing website, keeping a keen eye out for every design detail from the spacing between the elements to the smallest of interactions. </p>

      <p>I'd love to come back to this project by giving it a small code overhaul with new Sass/styling techniques I've learned, as well as making the "check out" feature more robust by emailling users with a "receipt" of their transaction or providing users with some other additional feedback besides a small pop up. I feel that would be informative and provide more incentive for a user to create an account as they can view their transactions at any time without any downloads.</p>
  `,
  marla: `
    <h2>All About the MARLA Website</h2>
    <p>
      A multi-page, fully responsive proof-of-concept site for Indiana University Indianapolis’ Media Arts Research & Learning Arcade (MARLA) in the Luddy School of Informatics, Computing, and Engineering that educates students, parents, and the public on the importance of video game and interactive media preservation. This project was created in tandem with fellow web developer CJ Eilestine, and together we spent around 8-10 weeks building it from a provided design as well as routine feedback sessions. When the project was complete, we presented our work in the school's biannual Capstone Showcase. 
    </p>

    <p>In addition to this being my first experience working with a client, it was also my first time working with Svelte, and I truly have never had more fun with a project. The scalability and lightning fast load times made it ideal for adding new features and pages at the clients' request. Svelte is also incredibly easy to introduce and walk through as a framework given it's focus on components/extendable sections of code, making communication incredibly smooth as we talked the client through our features and left frequent comments for future maintainability or updates.</p>

    <p>The biggest issue we ran into with this project is unfortunately the fact that it's a proof-of-concept. Given that this project was for an organization within Indiana University, both us as the developers and the client had made a large effort to acquire IU server space to host and launch the project on alongside other IU websites and get students interested as soon as possible. Given our time constraints and decisions from those maintaining the space, we were unable to secure a spot on the server and the task was left up the the clients for a future quarter. We were determined to get this project up and running, however- as the developers, CJ and I made a split decision to pivot and host the project on Vercel to provide the client with a solid build to user test with and expand on.</p>
  `,
  nuvema: `
    <h2>All About Nuvema Labs</h2>
    <p>
      Pokémon Black/White database in PHP & MySQL:
    </p>
  `,
  jungle: `
    <h2>All About JungleCook</h2>
    <p>
      A CRUD recipe app using jQuery, Sass & Firebase Auth:
    </p>
  `,
};

const overlay = document.getElementById("modalOverlay");
const body = document.getElementById("modalBody");
const close = document.getElementById("modalClose");

// open via class
document.querySelectorAll(".iconList .fa-file-lines").forEach((icon) =>
  icon.addEventListener("click", () => {
    const key = icon.dataset.project;
    body.innerHTML = projectDetails[key] || "<p>No details.</p>";
    overlay.classList.add("show");
  })
);

// close by removing the same class
close.addEventListener("click", () => overlay.classList.remove("show"));
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) overlay.classList.remove("show");
});
