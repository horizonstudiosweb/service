const projectStatuses = [
  {
    name: "Horizon Resort",
    status: "maintenance",
    label: "Under Maintenance",
    description: "Horizon Resort is currently under maintenance while improvements are being made."
  },
  {
    name: "Horizon Hotels",
    status: "closed",
    label: "Closed",
    description: "Horizon Hotels is currently closed and not available to players."
  },
  {
    name: "GREDDO germany",
    status: "active",
    label: "Operational",
    description: "GREDDO germany is active and currently running without known disruptions."
  }
];

/*
  Status options:

  active       = green point
  maintenance  = yellow point
  closed       = red point

  To change a project status, edit the values above.
*/

const navButtons = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".tab-section");
const openTabButtons = document.querySelectorAll("[data-tab-open]");
const statusCardsContainer = document.getElementById("statusCards");

function openTab(tabName) {
  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.tab === tabName);
  });

  sections.forEach((section) => {
    section.classList.toggle("active", section.id === tabName);
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openTab(button.dataset.tab);
  });
});

openTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    openTab(button.dataset.tabOpen);
  });
});

function createStatusCards() {
  if (!statusCardsContainer) return;

  statusCardsContainer.innerHTML = "";

  projectStatuses.forEach((project) => {
    const card = document.createElement("article");
    card.className = "status-card";

    card.innerHTML = `
      <div>
        <div class="status-top">
          <div>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
          </div>

          <span class="status-indicator ${project.status}"></span>
        </div>
      </div>

      <div class="status-label">${project.label}</div>
    `;

    statusCardsContainer.appendChild(card);
  });
}

createStatusCards();


