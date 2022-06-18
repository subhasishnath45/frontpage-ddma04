function main_menu(){
    $('#main-menu').smartmenus();
}
function navResposiveMenu(){
    const burgerMenu = document.getElementById("burger");
    const navbarMenu = document.getElementsByClassName("header_menu")[0];
    
    // Show and Hide Navbar Menu
    burgerMenu.addEventListener("click", () => {
        burgerMenu.classList.toggle("is-active");
        navbarMenu.classList.toggle("is-active");
    
        if (navbarMenu.classList.contains("is-active")) {
            navbarMenu.style.maxHeight = navbarMenu.scrollHeight + "px";
        } else {
            navbarMenu.removeAttribute("style");
        }
    });
}
$(document).ready(function(){
    main_menu();
    navResposiveMenu();
});