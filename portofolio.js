const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};
// Reveal elements
ScrollReveal().reveal(".headercontent h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".headercontent .sectiondescription", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".headercontent .headerbtn", {
  ...scrollRevealOption,
  delay: 1000,
});
// Reveal other sections similarly
// about container
ScrollReveal().reveal(".aboutcontent .sectionheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".aboutcontent .sectiondescription", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".aboutcontent .aboutbtn", {
  ...scrollRevealOption,
  delay: 1000,
});
// project container
ScrollReveal().reveal(".projectcard", {
  ...scrollRevealOption,
  interval: 500,
});
// portofolio container
ScrollReveal().reveal(".portofolio__card", {
  duration: 1000,
  interval: 500,
});
