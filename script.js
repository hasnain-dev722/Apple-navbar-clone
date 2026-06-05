const menubtn = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

menubtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
