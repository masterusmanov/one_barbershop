var ElOpenBtn = document.querySelector(".site-header__burger");
var ElCloseBtn = document.querySelector(".site-header-close");
var siteNavbar = document.querySelector(".site-nav__wrapper");

ElOpenBtn.addEventListener("click", function () {
  siteNavbar.classList.add("shownav");
});
ElCloseBtn.addEventListener("click", function () {
  siteNavbar.classList.remove("shownav");
});

