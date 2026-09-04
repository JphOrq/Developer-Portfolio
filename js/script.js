document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.textContent = open ? "×" : "☰";
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
      });
    });
  }
});

// Project List Section:
const projects = [
  {
    title: "Integrated Tuberculosis<br>Information System (ITIS)",
    type: "Information System",
    category: "TESDA-related project",
    description:
      "ITIS is the official web-based and mobile system of the Department of Health under the National Tuberculosis Control Program (NTP), designed to digitally record, monitor, and manage tuberculosis (TB) cases across public and private healthcare facilities.",
    image: "images/itis.png",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "PHP",
      "CodeIgniter",
      "MySQL/MariaDB",
      "XAMPP",
    ],
    link: "https://itis.doh.gov.ph/",
    linkText: "View project →",
    featured: true,
  },

  {
    title: "National Tuberculosis Control Program (NTP)",
    type: "Information System",
    category: "TESDA-related project",
    description:
      "NTP is the Department of Health's initiative aimed at reducing and eliminating tuberculosis (TB) through nationwide programs, policies, treatment services, and a centralized platform for TB information, resources, and surveillance.",
    image: "images/ntp.png",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "PHP",
      "WordPress",
      "MySQL/MariaDB",
      "XAMPP",
    ],
    link: "https://ntp.doh.gov.ph/",
    linkText: "View project →",
  },

  {
    title: "ITIS - Private TB Notification (ITIS Lite)",
    type: "Information System",
    category: "TESDA-related project",
    description:
      "ITIS Lite is a simplified online reporting platform under the Integrated Tuberculosis Information System (ITIS) of the Department of Health (DOH). It is designed specifically for private healthcare providers to report tuberculosis (TB) cases.",
    image: "images/itis_lite.png",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "PHP",
      "CodeIgniter",
      "MySQL/MariaDB",
      "XAMPP",
    ],
    link: "https://itis.doh.gov.ph/mandatorynotification/",
    linkText: "View project →",
  },

  {
    title: "Holiday Spin-O-Rama",
    type: "Information System",
    category: "Personal project",
    description:
      "The Holiday Spin-O-Rama is a festive and engaging game that brings joy and excitement to the holiday season. Players can spin a colorful wheel adorned with various holiday-themed prizes.",
    image: "images/spin-o-rama.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://jphorq.github.io/Holiday-Spin-O-Rama/",
    linkText: "View project →",
  },

  {
    title: "Won-Now",
    type: "Information System",
    category: "Personal project",
    description:
      "The Wheel of Ninong-Ninang on Wheels is a fun and easy way for Ninong and Ninang (godparents) to give gifts to their Inaanak (godchildren). The game is played by spinning a wheel divided into different sections, each with a different prize.",
    image: "images/WonNow.jpg",
    tags: ["HTML", "CSS", "JavaScript", "jQuery"],
    link: "https://jphorq.github.io/WoN-NoW/",
    linkText: "View project →",
  },
];

const projectGrid = document.getElementById("projectGrid");

projects.forEach((project) => {
  const article = document.createElement("article");

  article.className = "project-card";

  if (project.featured) {
    article.classList.add("project-featured");
  }

  article.innerHTML = `
      <div
        class="project-image"
        style="background-image: url('${project.image}')"
      >
        <div>
          <strong>${project.title}</strong>
        </div>
      </div>

      <div class="project-content">
        <p class="project-type">${project.type}</p>

        <h2>${project.category}</h2>

        <p>
          ${project.description}
        </p>

        <div class="tags">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>

        <a
          class="text-link"
          href="${project.link}"
          target="_blank"
          rel="noopener"
        >
          ${project.linkText}
        </a>
      </div>
    `;

  projectGrid.appendChild(article);
});

// Get the current year
const currentYear = new Date().getFullYear();

// Update the content of the element with id="currentYear"
document.getElementById("currentYear").textContent = currentYear;
