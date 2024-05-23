const hamburguer = document.querySelector("header .hamburguer");
const nav = document.querySelector("header nav");

hamburguer.addEventListener("click", () => {
  nav.classList.toggle("show");
});
