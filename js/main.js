// Automatisation de l'année dans le footer
document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

function closeMenu() {
  mobileMenu.classList.add("hidden");
}

function toggleMenu() {
  const isHidden = mobileMenu.classList.contains("hidden");

  if (isHidden) {
    mobileMenu.classList.remove("hidden");
  } else {
    closeMenu();
  }
}

menuBtn.addEventListener("click", toggleMenu);

// Fermer le menu quand on clique sur un lien
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Utilisation de Lucide icons
lucide.createIcons();