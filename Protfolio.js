let showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
    toggle.addEventListener("click", () => {
      nav.classList.toggle("hide");
    });
  }
};
showMenu("nav-toggle", "nav");

const navlink = document.querySelectorAll(".nav-link");

function linkAction() {
  navlink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  let navMenu = document.getElementById("nav");

  navMenu.classList.remove("show");
}

navlink.forEach((n) => n.addEventListener("click", linkAction));

window.onload = function () {
  GitHubCalendar(".calendar", "Rafayal383");
  GitHubCalendar(".calendar", "Rafayal383", {
    responsive: true,
    global_stats: false,
  });
};

function sendEmail() {
  let name = document.getElementById("name");
  let from = document.getElementById("email");
  let desc = document.getElementById("description");

  let ebody = `
    ${desc.value}
    <br>
    <br>
    <h4>First Name: </h4>${name.value}
    <br>
    <h4>Email: </h4>${from.value}
    `;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "srafayal@gmail.com",
    Password: "0370776B7E60CE8DBB5C0983640D15F406E5",
    To: "srafayal@gmail.com",
    From: "srafayal@gmail.com",
    Subject: "From Your Portfolio...",
    Body: ebody,
  }).then((message) => {
    if (message == "OK") {
      alert("Message send Successfully");
    } else {
      alert(message);
    }
  });
}

const sr = ScrollReveal({
  origin: "top",
  distance: "70px",
  duration: 1500,
  reset: false,
});

//--Home Animation
sr.reveal(".home__title", {});
sr.reveal("#Links", { delay: 200 });
sr.reveal("#Photo", { delay: 300 });

// -- About Animation
sr.reveal(".About__Photo", {});
sr.reveal(".About__Name", { delay: 200 });
sr.reveal(".About__Name+p", { delay: 400 });

// ---Skills Animation
sr.reveal(".skills-card", {});
sr.reveal(".Skill__Animation", { delay: 200 });
sr.reveal(".Skill-div-2", { delay: 400 });
sr.reveal(".Skill-bullet-point", { delay: 600 });


// --Github Animation
sr.reveal(".calendar", {});
sr.reveal(".stats-1", { delay: 200 });
sr.reveal(".stats-2", { delay: 400 });

// --Contact Animation
sr.reveal("#name", {});
sr.reveal("#email", { delay: 200 });
sr.reveal("#description", { delay: 400 });
sr.reveal(".Contact-button", { delay: 500 });
