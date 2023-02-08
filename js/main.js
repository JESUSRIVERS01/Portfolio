const iconHamburguer = document.querySelector(".icon-menu-mobile");
const navBarDesktop = document.querySelector(".nav-bar-desktop");
function mostrarMenuMobile() {
  navBarDesktop.classList.toggle("nav-bar-mobile")  
}







iconHamburguer.addEventListener("click",mostrarMenuMobile)