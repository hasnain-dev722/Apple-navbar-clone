const menubtn = document.getElementById("mobile-menu");
const menu = document.querySelector(".menu");

menubtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
