

let nav__menu_hamburger_icon = document.getElementById("nav__menu_hamburger_icon");

nav__menu_hamburger_icon.addEventListener("click", () => {
    let nav__menu_options_mobile = document.getElementById("nav__menu_options_mobile");
    nav__menu_options_mobile.classList.toggle("displayBlockForElement")
});