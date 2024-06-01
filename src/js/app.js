const hamburguer = document.querySelector("header .hamburguer");
const body = document.querySelector("body");
const nav = document.querySelector("header nav");

hamburguer.addEventListener("click", () => {
  nav.classList.toggle("show");
  body.classList.toggle("noscroll");
});
