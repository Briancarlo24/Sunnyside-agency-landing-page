const menu = document.querySelector(".navigation__button");

menu.addEventListener("click", function (e) {
  e.preventDefault();

  document.querySelector(".navigation__nav").classList.toggle("hidden");
  document.querySelector(".navigation__icon--1").classList.toggle("icon-1");
  document.querySelector(".navigation__icon--2").classList.toggle("icon-2");
  document.querySelector(".navigation__icon--3").classList.toggle("icon-3");
});
