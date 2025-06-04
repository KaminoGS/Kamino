const links = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("main section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const top = section.offsetTop - 100;
    if (scrollY >= top) {
      current = section.id;
    }
  });