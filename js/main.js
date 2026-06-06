const menuToggle = document.getElementById("menu-toggle");
const primaryNav = document.getElementById("primary-nav");

if (menuToggle && primaryNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close main menu" : "Open main menu");
    menuToggle.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark" aria-hidden="true"></i>'
      : '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
  });

  primaryNav.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (target.tagName === "A" && primaryNav.classList.contains("open")) {
      primaryNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open main menu");
      menuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    }
  });
}
