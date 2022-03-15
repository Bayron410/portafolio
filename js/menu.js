let botonIcono = document.querySelector(".menu__icono");
let menuList = document.querySelector(".menu__list");
let menuItems = document.querySelectorAll(".menu__item");

botonIcono.addEventListener("click", menuMostrar);

for(let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", menuMostrar);
}

function menuMostrar() {
    menuList.classList.toggle("menu__mostrar");
}