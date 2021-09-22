/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

// Define Global Variables
const sections = document.querySelectorAll("section");
const navList = document.querySelector("ul");

// build the nav
const renderNavBar = function () {
  sections.forEach((section) => {
    const menuElHtml = `
    <li class="menu__link ${section.id}">
    <a href="#${section.id}">
    ${section.id}
    </a>
    </li>`;
    navList.insertAdjacentHTML("beforeend", menuElHtml);
  });
};
renderNavBar();

// Scroll to anchor ID using scrollTO event
const scrollIntoSection = function () {
  sections.forEach((section) => {
    const li = document.querySelector(`.${section.id}`);
    li.addEventListener("click", function (e) {
      e.preventDefault();
      section.scrollIntoView({
        block: "end",
        behavior: "smooth",
      });
    });
  });
};
scrollIntoSection();

//displaying which section in navbar the user in
const changeNavState = function () {
  document.addEventListener("scroll", function () {
    sections.forEach((section, i) => {
      const rect = section.getBoundingClientRect();
      const inRange = rect.top >= -280 && rect.bottom < 750;
      const li = document.querySelectorAll("li");
      if (inRange) {
        li[i].classList.add("nav__active");
        section.classList.add("your-active-class");
        return;
      }
      if (li[i].classList.contains("nav__active")) {
        li[i].classList.remove("nav__active");
        section.classList.remove("your-active-class");
      }
    });
  });
};

changeNavState();
///////////////////////////////////


