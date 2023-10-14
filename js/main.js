var ElOpenBtn = document.querySelector(".site-header__burger");
var ElCloseBtn = document.querySelector(".site-header-close");
var siteNavbar = document.querySelector(".site-nav__wrapper");
var currentYear = document.querySelector("#currentYear");

currentYear.innerHTML = new Date().getFullYear()
ElOpenBtn.addEventListener("click", function () {
  siteNavbar.classList.add("shownav");
});
ElCloseBtn.addEventListener("click", function () {
  siteNavbar.classList.remove("shownav");
});
