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
  eventsea: `
    <h2>All About EventSea</h2>
<p>EventSea A student-centered campus engagement and co-curricular management platform designed to simplify event planning and increase participation. The application enables student leaders to create, manage, and promote events through a unified interface while providing students with personalized event discovery tools. The project is actively being developed with fellow full stack developer Ev Schmitt and fully unvieled at the Luddy Indianapolis School of Informatics, Computing, and Engineering's biannual Capstone Showcase.</p>
<p>EventSea is the change we as students wanted to invent. As two heavily engaged students working on campus that had been active in several organizations and commitments all across campus, we found it using current tools to be difficult and limiting. There was no real way to streamline the process of creating, managing, and promoting events for students that didn't require the use of several different tools and/or channels of communication, and the universities' primary event management system had a reputation of being clunky and overcomplicated.</p>
<p>We wanted to create a platform that would make it easy for student leaders to create and manage events, while also providing students with personalized discovery and engagement tools. We also wanted to make sure that the platform was user-friendly and accessible to all students, regardless of their level of technical expertise or available time. We've been there, and we aimed to create an applicaiton to help other student leaders bridge that gap with ease.</p>
  `,
  marla: `
    <h2>All About the MARLA Website</h2>
    <p>
      A multi-page, fully responsive proof-of-concept site for Indiana University Indianapolis’ Media Arts Research & Learning Arcade (MARLA) in the Luddy School of Informatics, Computing, and Engineering that educates students, parents, and the public on the importance of video game and interactive media preservation. This project was created in tandem with fellow web developer CJ Eilestine, and together we spent around 8-10 weeks building it from a provided design as well as routine feedback sessions. When the project was complete, we presented our work in the school's biannual Capstone Showcase. 
    </p>
    <p>In addition to this being my first experience working with a client, it was also my first time working with Svelte, and I truly have never had more fun with a project. The scalability and lightning fast load times made it ideal for adding new features and pages at the clients' request. Svelte is also incredibly easy to introduce and walk through as a framework given it's focus on components/extendable sections of code, making communication incredibly smooth as we talked the client through our features and left frequent comments for future maintainability or updates.</p>
    <p>The biggest issue we ran into with this project is unfortunately the fact that it's a proof-of-concept. Given that this project was for an organization within Indiana University, every stakeholder had made a large effort to acquire IU server space to host and launch the project on alongside other IU websites and get students interested as soon as possible. Given our time constraints and decisions from those maintaining the space, we were unable to secure a spot on the server and the task was left up the the clients for a future quarter. We were determined to get this project up and running, however- as the developers, CJ and I made a split decision to pivot and host the project on Vercel to provide the client with a solid build to user test with and expand on.</p>
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
  }),
);

// close by removing the same class
close.addEventListener("click", () => overlay.classList.remove("show"));
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) overlay.classList.remove("show");
});
